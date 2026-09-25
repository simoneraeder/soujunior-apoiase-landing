import { Reveal } from "@/components/reveal/reveal";

import { ABOUT, type AboutFact } from "./about.data";
import styles from "./about-facts.module.css";

function AboutFactItem({ label, value }: AboutFact) {
  return (
    <div className={styles.aboutFact}>
      <dt className={styles.aboutFactKey}>{label}</dt>
      <dd className={styles.aboutFactValue}>{value}</dd>
    </div>
  );
}

export function AboutFacts() {
  return (
    <Reveal delay={360}>
      <dl className={styles.aboutFacts}>
        {ABOUT.facts.map((fact) => (
          <AboutFactItem
            key={fact.label}
            label={fact.label}
            value={fact.value}
          />
        ))}
      </dl>
    </Reveal>
  );
}
