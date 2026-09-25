import { Reveal } from "@/components/reveal/reveal";
import { IconArrow } from "@/components/ui/icons/icon-arrow";
import { IconHeart } from "@/components/ui/icons/icon-heart";

import { PARTICIPATE_FORM_URL } from "./participate.data";
import styles from "./participate-cta.module.css";

export function ParticipateCta() {
  return (
    <Reveal delay={120}>
      <div className={styles.wrap}>
        <span className={styles.hint}>é rapidinho, vai!</span>
        <a
          href={PARTICIPATE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          <span className={styles.ctaIconCircle} aria-hidden="true">
            <IconHeart className={styles.ctaIcon} />
          </span>
          Quero me inscrever agora
          <IconArrow className={styles.ctaIcon} />
        </a>
      </div>
    </Reveal>
  );
}
