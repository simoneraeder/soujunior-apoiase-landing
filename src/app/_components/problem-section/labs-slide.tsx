import Image from "next/image";

import { SITE } from "@/lib/site-config";

import { ArrowIcon, RocketIcon } from "./icons";
import styles from "./iniciativas-section.module.css";

type LabsSlideProps = {
  onCtaClick?: () => void;
};

export function LabsSlide({ onCtaClick }: LabsSlideProps) {
  return (
    <>
      <div className={styles.slideHead}>
        <h3 className={`${styles.slideTitle} ${styles.slideTitleLabs}`}>
          SouJunior <span className={styles.mark}>Labs</span>
          <span className={styles.slideIcon} aria-hidden="true">
            <RocketIcon />
          </span>
        </h3>
        <p className={styles.slideSub}>
          Um projeto que visa <strong>acelerar a carreira</strong> através de{" "}
          <strong>
            projetos voluntários de livre iniciativa e participação
          </strong>{" "}
          — feito por quem quer construir{" "}
          <span className={styles.accent}>repertório real</span> antes da
          primeira oportunidade.
        </p>
      </div>

      <div className={styles.problemBlock}>
        <div className={styles.problemContent}>
          <p className={styles.problemText}>
            Entrar na tecnologia não deveria depender de ter ou não uma{" "}
            <span className={styles.em}>oportunidade</span>.
          </p>
          <p className={styles.problemSub}>
            Muita gente estuda, faz cursos e constrói habilidades de verdade —
            mas esbarra na mesma barreira: a falta de experiência prática. Sem
            repertório, fica difícil dar o primeiro passo.
          </p>
          <a
            href={SITE.labsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.problemCta}
            onClick={onCtaClick}
          >
            Quero fazer parte da Labs <ArrowIcon />
          </a>
        </div>
        <div className={styles.problemVisual}>
          {/*
            next/image com `fill` porque o `<img>` original não tinha
            width/height e era dimensionado via CSS pela classe
            `.problemVisual`. O `fill` replica exatamente esse
            comportamento: a imagem ocupa 100% do container pai.

            Requisitos para `fill` funcionar:
              - o pai (.problemVisual) precisa ter `position: relative`
                (ou absolute/fixed) e dimensões definidas.

            `sizes` ajuda o Next a escolher a melhor resolução:
              - mobile  → ~100vw (empilhado)
              - desktop → ~50vw (grid de 2 colunas)
            Sem `sizes`, o Next assume 100vw e baixa imagens grandes demais.
          */}
          <Image
            src="/images/problem_team.webp"
            alt="Pessoa refletindo sobre carreira"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.problemImage}
          />
          <span className={styles.tag}>✦ a barreira</span>
        </div>
      </div>
    </>
  );
}
