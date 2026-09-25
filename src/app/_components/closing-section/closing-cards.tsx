import { Reveal } from "@/components/reveal/reveal";
import { IconCoin } from "@/components/ui/icons/icon-coin";
import { IconHandshake } from "@/components/ui/icons/icon-handshake";

import { SimpleCard } from "./simple-card";
import { APOIA_SE_URL, PARTICIPATE_FORM_URL } from "./closing.data";
import styles from "./closing-cards.module.css";

/**
 * Os dois cards brancos da section: "Contribua com a causa" (azul) e
 * "Faça parte do time" (rosa). Cada um abre seu link em nova aba.
 */
export function ClosingCards() {
  return (
    <div className={styles.cards}>
      <Reveal delay={100} className={styles.revealWrap}>
        <SimpleCard
          variant="v1"
          icon={IconCoin}
          titlePre="Contribua com a"
          titleWave="causa"
          sub="doa o que couber no bolso"
          desc="Mantém projetos, mentorias e a comunidade girando para quem tá começando."
          ctaLabel="Doar agora"
          ctaHref={APOIA_SE_URL}
        />
      </Reveal>
      <Reveal delay={180} className={styles.revealWrap}>
        <SimpleCard
          variant="v2"
          icon={IconHandshake}
          titlePre="Faça parte do"
          titleWave="time"
          sub="doe seu tempo e talento"
          desc="Divulga, dá aula, recruta ou conecta a SouJunior com tua empresa."
          ctaLabel="Quero ajudar"
          ctaHref={PARTICIPATE_FORM_URL}
        />
      </Reveal>
    </div>
  );
}
