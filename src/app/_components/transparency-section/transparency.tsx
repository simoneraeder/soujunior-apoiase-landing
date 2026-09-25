import { Container } from "@/components/ui/container/container";
import { Reveal } from "@/components/reveal/reveal";
import { Section } from "@/components/ui/section/section";

import { CostCard } from "./cost-card";
import { Faq } from "./faq";
import { TransparencyDecorations } from "./transparency-decorations";
import { TransparencyHeader } from "./transparency-header";
import { COSTS } from "./transparency.data";
import styles from "./transparency.module.css";

export function Transparency() {
  return (
    <Section
      id="transparencia"
      aria-labelledby="transparencia-titulo"
      className={styles.transparency}
    >
      <TransparencyDecorations />

      <Container className={styles.content}>
        <TransparencyHeader />

        <div className={styles.costs}>
          {COSTS.map((cost, i) => (
            <Reveal key={cost.title} delay={i * 90}>
              <CostCard cost={cost} index={i} />
            </Reveal>
          ))}
        </div>

        <Faq />
      </Container>
    </Section>
  );
}
