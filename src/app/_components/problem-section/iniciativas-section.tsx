"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import { Reveal } from "@/components/reveal/reveal";

import { LabsSlide } from "./labs-slide";
import { StatsGrid } from "./stats-grid";
import { TalkSlide } from "./talk-slide";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";
import styles from "./iniciativas-section.module.css";

/**
 * Dispara um evento para o GTM via `window.dataLayer`.
 * Guarda de SSR: em Next.js o módulo também roda no servidor, então
 * `window` pode ser `undefined` no primeiro render — daí o early return.
 */
function track(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...data });
}

/**
 * Número total de slides do carrossel.
 * Se adicionar/remover slide, atualize aqui E replique os blocos
 * `<div className={styles.deckCard}>` + os dots (o TSX não é
 * gerado dinamicamente porque cada slide tem conteúdo distinto).
 */
const TOTAL = 2;

/** Duração do auto-play, em ms. Precisa casar com `@keyframes dotFill`
 *  no CSS (o preenchimento visual do dot ativo). */
const AUTOPLAY_MS = 7000;

/** Distância mínima (px) que o ponteiro precisa percorrer no drag
 *  para contar como swipe de verdade (evita trocar slide por engano
 *  em cliques/arrastes curtos). */
const DRAG_THRESHOLD = 50;

export function IniciativasSection() {
  // Índice do slide ativo: 0 = Labs, 1 = Talk.
  const [current, setCurrent] = useState(0);
  // Pausa o auto-play enquanto o mouse está em cima do carrossel
  // e suspende a animação de fill do dot (via classe `.paused`).
  const [paused, setPaused] = useState(false);
  // Enquanto `true`, desativamos a transição CSS do slide ativo
  // para que ele siga o ponteiro 1:1 sem "lag" de animação.
  const [dragging, setDragging] = useState(false);
  // Offset horizontal (px) do slide ativo durante o drag.
  // Positivo = arrastando pra direita, negativo = pra esquerda.
  const [dragX, setDragX] = useState(0);

  // Guarda a posição X (clientX) onde o ponteiro tocou no início do drag.
  // `null` = nenhum drag em andamento. É um ref (e não state) porque
  // não dispara re-render — só serve para calcular o delta em onDragMove.
  const dragStart = useRef<number | null>(null);

  /**
   * Vai para um slide específico e emite evento de analytics.
   * Centralizamos aqui (em vez de chamar setCurrent direto) para que
   * TODA troca navegada pelo usuário gere `carousel_change`.
   * ⚠️ O auto-play NÃO passa por aqui — ele chama setCurrent direto
   * para não re-criar o interval a cada tick (ver useEffect abaixo).
   */
  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setDragX(0); // mata qualquer offset residual de drag anterior
    track("carousel_change", { slide: i });
  }, []);

  const next = useCallback(() => goTo((current + 1) % TOTAL), [current, goTo]);
  const prev = useCallback(
    () => goTo((current - 1 + TOTAL) % TOTAL),
    [current, goTo],
  );

  /**
   * Auto-play: avança o slide a cada AUTOPLAY_MS.
   * - Recriado sempre que `paused` ou `dragging` mudam.
   * - Quando pausado, o cleanup derruba o interval — nada de timer órfão.
   * - Usa atualização funcional (c => ...) para não depender de `current`
   *   no array de deps (senão o timer reiniciaria a cada troca de slide).
   */
  useEffect(() => {
    if (paused || dragging) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % TOTAL);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, dragging]);

  /**
   * Navegação por teclado (global, não só com foco no carrossel).
   * Setas esquerda/direita trocam de slide.
   * Como `next`/`prev` são recriados a cada mudança de `current`,
   * o listener é removido e re-adicionado a cada troca — funciona,
   * mas é o motivo pelo qual `current` aparece transitivamente aqui.
   */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  /** Início do drag: guarda o X inicial e liga o modo "sem transição". */
  const onDragStart = (clientX: number) => {
    dragStart.current = clientX;
    setDragging(true);
  };

  /** Durante o drag: só atualiza o offset se realmente há drag ativo. */
  const onDragMove = (clientX: number) => {
    if (dragStart.current == null) return;
    setDragX(clientX - dragStart.current);
  };

  /**
   * Fim do drag:
   * - Se o deslocamento passou do threshold, navega (sinal decide a direção).
   * - Sempre reseta dragX/dragging e o ref, mesmo sem navegar.
   * - Guarda contra chamada "dupla" (o onMouseLeave do wrapper também
   *   chama este handler, para o caso de o usuário sair da área arrastando).
   */
  const onDragEnd = () => {
    if (dragStart.current == null) {
      setDragging(false);
      return;
    }
    if (Math.abs(dragX) > DRAG_THRESHOLD) {
      if (dragX < 0)
        next(); // arrastou pra esquerda → próximo
      else prev(); // arrastou pra direita  → anterior
    }
    setDragX(0);
    setDragging(false);
    dragStart.current = null;
  };

  /**
   * Calcula o `style` inline de cada card conforme sua posição relativa
   * ao slide ativo. Isso NÃO vai pro CSS module porque:
   *  1. depende de valores dinâmicos (dragX);
   *  2. precisa ser aplicado no elemento individual via style="" — o
   *     CSS module só definine as classes base (posição absoluta,
   *     transition, will-change, etc.).
   *
   * Os transforms formam a "pilha 3D" (deck): o slide ativo fica de frente,
   * os outros dois ficam jogados pros lados, girados no Y e com blur.
   */
  const getCardStyle = (index: number): CSSProperties => {
    const diff = index - current;

    // Slide ativo — segue o ponteiro no eixo X, sem blur, no topo da pilha.
    if (diff === 0) {
      return {
        position: "relative", // tira do absolute → ocupa o fluxo e define a altura do stage
        transform: `translateX(${dragX}px) translateZ(0) rotateY(0deg) rotateZ(0deg) scale(1)`,
        opacity: 1,
        filter: "blur(0)",
        zIndex: 10,
        // Durante o drag, sem transition → movimento acompanha o dedo/mouse.
        // Fora do drag, `undefined` deixa a transition do CSS module valer.
        transition: dragging ? "none" : undefined,
      };
    }

    // Slide "à esquerda" do ativo — recuado, girado pra direita, desfocado.
    if (diff < 0) {
      return {
        transform:
          "translateX(-38%) translateZ(-280px) rotateY(20deg) rotateZ(-3deg) scale(.85)",
        opacity: 0.5,
        filter: "blur(3px)",
        zIndex: 5,
      };
    }

    // Slide "à direita" do ativo — espelhado do caso anterior.
    return {
      transform:
        "translateX(38%) translateZ(-280px) rotateY(-20deg) rotateZ(3deg) scale(.85)",
      opacity: 0.5,
      filter: "blur(3px)",
      zIndex: 5,
    };
  };

  return (
    <section
      id="iniciativas"
      className={styles.section}
      // Paddings aqui (e não no .module.css) porque estavam inline no
      // HTML original e são só ajustes locais desta seção.
      style={{
        paddingTop: "clamp(1.25rem,3vw,2.5rem)",
        paddingBottom: "clamp(2rem,5vw,4.5rem)",
      }}
    >
      <div className={styles.wrap}>
        <div className={styles.secHeadBare}>
          <Reveal>
            <span className={styles.label}>O problema</span>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <p className={styles.problemStatement}>
            Não é só sobre aprender tecnologia.{" "}
            <span className={styles.hl}>
              É sobre estar preparado para a próxima oportunidade.
            </span>
          </p>
        </Reveal>

        <div className={styles.labsBlock}>
          {/* Doodles decorativos (✦) posicionados via CSS (.s1–.s4).
              São puramente visuais → aria-hidden. */}
          <span
            className={`${styles.labsDoodle} ${styles.doodleStar} ${styles.s1}`}
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className={`${styles.labsDoodle} ${styles.doodleStar} ${styles.s2}`}
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className={`${styles.labsDoodle} ${styles.doodleStar} ${styles.s3}`}
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className={`${styles.labsDoodle} ${styles.doodleStar} ${styles.s4}`}
            aria-hidden="true"
          >
            ✦
          </span>

          <div className={styles.labsResponse}>
            <Reveal>
              <span className={styles.sticker}>
                <span className={styles.dot} /> Nossa resposta
              </span>
            </Reveal>
          </div>

          <Reveal delay={100}>
            {/* Wrapper do carrossel — o hover pausa o auto-play e,
                ao sair, também força o fim de qualquer drag pendente
                (evita ficar "travado" se o mouse sair no meio do arrasto). */}
            <div
              className={styles.carouselWrapper}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => {
                setPaused(false);
                onDragEnd();
              }}
            >
              <button
                type="button"
                className={`${styles.carouselArrow} ${styles.prev}`}
                onClick={prev}
                aria-label="Slide anterior"
              >
                <ArrowLeftIcon />
              </button>

              {/* Stage 3D: captura touch e mouse para o drag/swipe.
                  Os handlers de mouse ficam no stage inteiro (e não só no
                  card ativo) para que o gesto funcione em qualquer ponto. */}
              <div
                className={styles.deckStage}
                onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
                onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
                onTouchEnd={onDragEnd}
                onMouseDown={(e) => onDragStart(e.clientX)}
                onMouseMove={(e) => dragging && onDragMove(e.clientX)}
                onMouseUp={onDragEnd}
              >
                {/* Cada deckCard existe SEMPRE no DOM (não é condicional)
                    porque a transição CSS anima entre os dois estados.
                    A classe `isActive` libera pointer-events e dispara as
                    animações de entrada dos elementos internos (ver CSS).
                    aria-hidden esconde do leitor de tela o que não está ativo. */}
                <div
                  className={`${styles.deckCard} ${
                    current === 0 ? styles.isActive : ""
                  }`}
                  style={getCardStyle(0)}
                  aria-hidden={current !== 0}
                >
                  {/* O track do CTA fica aqui (não dentro do LabsSlide) para
                      manter o componente de slide "burro" — ele só recebe
                      um callback e não precisa saber que analytics existe. */}
                  <LabsSlide
                    onCtaClick={() =>
                      track("cta_clicked", { location: "labs" })
                    }
                  />
                </div>
                <div
                  className={`${styles.deckCard} ${
                    current === 1 ? styles.isActive : ""
                  }`}
                  style={getCardStyle(1)}
                  aria-hidden={current !== 1}
                >
                  <TalkSlide
                    onCtaClick={() =>
                      track("cta_clicked", { location: "talk" })
                    }
                  />
                </div>
              </div>

              <button
                type="button"
                className={`${styles.carouselArrow} ${styles.next}`}
                onClick={next}
                aria-label="Próximo slide"
              >
                <ArrowRightIcon />
              </button>
            </div>
          </Reveal>

          <Reveal delay={160}>
            {/* Dots de navegação.
                role="tablist"/"tab" + aria-selected dão semântica de
                "abas" ao carrossel — funciona bem com NVDA/VoiceOver,
                ainda que idealmente houvesse um role="tabpanel" associado.
                A classe `.paused` congela a animação de fill do dot ativo
                enquanto o mouse está no carrossel. */}
            <div
              className={styles.carouselDots}
              role="tablist"
              aria-label="Navegação do carrossel"
            >
              <button
                type="button"
                role="tab"
                className={`${styles.carouselDot} ${
                  current === 0 ? styles.active : ""
                } ${paused ? styles.paused : ""}`}
                onClick={() => goTo(0)}
                aria-label="Ir para SouJunior Labs"
                aria-selected={current === 0}
              />
              <button
                type="button"
                role="tab"
                className={`${styles.carouselDot} ${
                  current === 1 ? styles.active : ""
                } ${paused ? styles.paused : ""}`}
                onClick={() => goTo(1)}
                aria-label="Ir para SouJunior Talk"
                aria-selected={current === 1}
              />
            </div>
          </Reveal>
        </div>

        {/* StatsGrid é totalmente autocontido: contém os 4 cards + o
            contador animado. Não precisa de props nem de contexto. */}
        <StatsGrid />
      </div>
    </section>
  );
}
