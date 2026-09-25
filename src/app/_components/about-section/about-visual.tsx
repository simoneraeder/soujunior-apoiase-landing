import { AboutBigNumber } from "./about-big-number";
import { AboutCardVisual } from "./about-card-visual";
import styles from "./about-visual.module.css";

export function AboutVisual() {
  return (
    <div className={styles.aboutVisual}>
      <AboutCardVisual />
      <AboutBigNumber />
    </div>
  );
}
