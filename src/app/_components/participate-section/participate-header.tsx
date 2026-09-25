import { Reveal } from "@/components/reveal/reveal";

import styles from "./participate-header.module.css";

export function ParticipateHeader() {
  return (
    <div className={styles.header}>
      <Reveal delay={80}>
        <h2 className={styles.title}>
          Faça você também parte da nossa{" "}
          <span className={styles.titleHighlight}>comunidade!</span>
        </h2>
      </Reveal>
      <Reveal delay={160}>
        <p className={styles.sub}>
          Na SouJunior, há{" "}
          <strong className={styles.subStrong}>
            diversas maneiras de participar
          </strong>
          . Escolha a que combina com você e venha construir essa história com a
          gente.
        </p>
      </Reveal>
    </div>
  );
}
