import { Reveal } from "@/components/reveal/reveal";

import { AboutFacts } from "./about-facts";
import { AboutQuote } from "./about-quote";
import styles from "./about-narrative.module.css";

export function AboutNarrative() {
  return (
    <div className={styles.aboutNarrative}>
      <Reveal delay={120}>
        <p className={styles.aboutLead}>
          A SouJunior surgiu da percepção de que poucas pessoas tinham{" "}
          <strong className={styles.aboutLeadStrong}>
            conhecimento ou experiência prática
          </strong>{" "}
          em tecnologia.
        </p>
      </Reveal>

      <div className={styles.aboutParagraphs}>
        <Reveal delay={180}>
          <p className={styles.aboutParagraph}>
            Em julho de 2022, o idealizador Wouerner Brandão reuniu um time
            disposto a mudar isso. A ideia era simples e ambiciosa:{" "}
            <span className={styles.aboutParagraphHighlight}>
              colocar a mão na massa desde o início
            </span>
            , construindo produtos reais e vivendo a rotina de uma empresa de
            tecnologia.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className={styles.aboutParagraph}>
            Hoje, voluntários iniciantes e profissionais experientes trabalham
            lado a lado - os mais experientes atuam como{" "}
            <strong className={styles.aboutParagraphStrong}>
              mentores e líderes de time
            </strong>
            , preparando juniores para o mercado por meio de prática real.
          </p>
        </Reveal>
      </div>

      <AboutFacts />
      <AboutQuote />
    </div>
  );
}
