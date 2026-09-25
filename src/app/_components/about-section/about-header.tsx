import { Label } from "@/components/ui/label/label";
import { Reveal } from "@/components/reveal/reveal";

import { ABOUT } from "./about.data";
import styles from "./about-header.module.css";

export function AboutHeader() {
  const [line1] = ABOUT.title;

  return (
    <div className={styles.aboutHeader}>
      <Reveal className={styles.aboutHeaderLabelWrap}>
        <Label>{ABOUT.label}</Label>
      </Reveal>
      <Reveal delay={60}>
        <h2 id="sobre-titulo" className={styles.aboutTitle}>
          <span className={styles.aboutTitleLine}>{line1}</span>
          <span className={styles.aboutTitleLine}>
            de quem viu a{" "}
            <span className={styles.aboutTitleHighlight}>
              barreira de perto.
            </span>
          </span>
        </h2>
      </Reveal>
    </div>
  );
}
