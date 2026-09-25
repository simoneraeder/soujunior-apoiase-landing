import { Reveal } from "@/components/reveal/reveal";

import { ABOUT } from "./about.data";
import styles from "./about-big-number.module.css";

export function AboutBigNumber() {
  const { value, suffix, title, desc } = ABOUT.bignum;

  return (
    <Reveal delay={160}>
      <div className={styles.aboutBignum}>
        <div className={styles.aboutBignumNum}>
          {value}
          <span className={styles.aboutBignumPlus}>{suffix}</span>
        </div>
        <div className={styles.aboutBignumDesc}>
          <b className={styles.aboutBignumDescStrong}>{title}</b>
          {desc}
        </div>
      </div>
    </Reveal>
  );
}
