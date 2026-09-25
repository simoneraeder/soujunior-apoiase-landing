import { IconBolt } from "@/components/ui/icons/icon-bolt";
import { IconHeartFill } from "@/components/ui/icons/icon-heart-fill";
import { IconSparkle } from "@/components/ui/icons/icon-sparkle";
import { IconStar } from "@/components/ui/icons/icon-star";

import styles from "./closing-stars.module.css";

/**
 * Estrelas decorativas que piscam nos cantos da section.
 * Visíveis apenas em telas ≥768px (via CSS).
 */
export function ClosingStars() {
  return (
    <>
      <span className={`${styles.star} ${styles.star1}`} aria-hidden="true">
        <IconStar />
      </span>
      <span className={`${styles.star} ${styles.star2}`} aria-hidden="true">
        <IconSparkle />
      </span>
      <span className={`${styles.star} ${styles.star3}`} aria-hidden="true">
        <IconBolt />
      </span>
      <span className={`${styles.star} ${styles.star4}`} aria-hidden="true">
        <IconHeartFill />
      </span>
    </>
  );
}
