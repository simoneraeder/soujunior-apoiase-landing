import { Reveal } from "@/components/reveal/reveal";

import { ABOUT } from "./about.data";
import styles from "./about-quote.module.css";

export function AboutQuote() {
  return (
    <Reveal delay={420}>
      <blockquote className={styles.aboutQuote}>
        <p className={styles.aboutQuoteText}>
          Participar da SouJunior é adquirir experiência real, construir
          portfólio com{" "}
          <span className={styles.aboutQuoteHighlight}>alta visibilidade</span>{" "}
          e contar com uma{" "}
          <strong className={styles.aboutQuoteStrong}>
            rede de apoio, networking
          </strong>{" "}
          e novas oportunidades.
        </p>
        <footer className={styles.aboutQuoteSignature}>
          {ABOUT.signature}
        </footer>
      </blockquote>
    </Reveal>
  );
}
