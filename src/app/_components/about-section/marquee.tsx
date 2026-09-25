import { MARQUEE } from "./about.data";
import styles from "./marquee.module.css";

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];

  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {items.map((word, i) => (
            <span key={`${word}-${i}`} className={styles.marqueeItem}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
