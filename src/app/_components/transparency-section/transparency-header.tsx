import { Label } from "@/components/ui/label/label";
import { Reveal } from "@/components/reveal/reveal";

import styles from "./transparency-header.module.css";

export function TransparencyHeader() {
  return (
    <div className={styles.transparencyHead}>
      <Reveal className={styles.transparencyHeadLabelWrap}>
        <Label>Transparência &amp; Perguntas</Label>
      </Reveal>
      <Reveal delay={60}>
        <h2 id="transparencia-titulo" className={styles.transparencyTitle}>
          <span className={styles.transparencyTitleLine}>
            Para onde vai o apoio
          </span>
          <span className={styles.transparencyTitleLine}>
            e as respostas{" "}
            <span className={styles.transparencyTitleHighlight}>
              mais diretas
            </span>
            .
          </span>
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className={styles.transparencyDesc}>
          A SouJunior é uma{" "}
          <strong className={styles.transparencyDescStrong}>
            associação sem fins lucrativos
          </strong>
          , mantida por doações e trabalho voluntário. Abaixo, os custos
          recorrentes que sua contribuição ajuda a cobrir — e as dúvidas que
          mais recebemos.
        </p>
      </Reveal>
    </div>
  );
}
