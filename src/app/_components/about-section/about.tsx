import { Container } from "@/components/ui/container/container";
import { Section } from "@/components/ui/section/section";

import { AboutHeader } from "./about-header";
import { AboutNarrative } from "./about-narrative";
import { AboutVisual } from "./about-visual";
import { Marquee } from "./marquee";
import styles from "./about.module.css";

export function About() {
  return (
    <>
      <Marquee />
      <Section
        id="sobre"
        aria-labelledby="sobre-titulo"
        className={styles.about}
      >
        <Container>
          <AboutHeader />
          <div className={styles.aboutGrid}>
            <AboutVisual />
            <AboutNarrative />
          </div>
        </Container>
      </Section>
    </>
  );
}
