import { Container } from "@/components/ui/container/container";

import { ClosingCards } from "./closing-cards";
import { ClosingHead } from "./closing-head";
import { ClosingStars } from "./closing-stars";
import { ClosingWaves } from "./closing-waves";
import styles from "./closing.module.css";

/**
 * Section final da landing page: convida a pessoa a doar ou participar do time.
 * Fica logo antes do rodapé, com id="apoie" para ser a âncora dos CTAs do header.
 */
export function Closing() {
  return (
    <section id="apoie" className={styles.closing}>
      <ClosingWaves />
      <ClosingStars />

      <Container className={styles.content}>
        <div className={styles.layout}>
          <ClosingHead />
          <ClosingCards />
        </div>
      </Container>
    </section>
  );
}
