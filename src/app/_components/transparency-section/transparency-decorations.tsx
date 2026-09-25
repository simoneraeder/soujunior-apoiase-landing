import styles from "./transparency-decorations.module.css";

export function TransparencyDecorations() {
  return (
    <>
      <span className={`${styles.deco} ${styles.deco1}`} aria-hidden="true">
        ✦
      </span>
      <span className={`${styles.deco} ${styles.deco2}`} aria-hidden="true">
        ✦
      </span>
      <span className={`${styles.deco} ${styles.deco3}`} aria-hidden="true">
        ✦
      </span>
      <span className={`${styles.deco} ${styles.deco4}`} aria-hidden="true">
        ✦
      </span>
    </>
  );
}
