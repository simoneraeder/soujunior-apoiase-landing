import Image from "next/image";

import { Reveal } from "@/components/reveal/reveal";

import { ABOUT } from "./about.data";
import styles from "./about-card-visual.module.css";

export function AboutCardVisual() {
  return (
    <Reveal delay={80}>
      <div className={styles.aboutCard}>
        <Image
          src={ABOUT.image.src}
          alt={ABOUT.image.alt}
          fill
          sizes="(max-width: 980px) 100vw, 45vw"
          className={styles.aboutCardImage}
          loading="lazy"
        />
        <span className={styles.aboutCardTag} aria-hidden="true">
          {ABOUT.image.tag}
        </span>
        <div className={styles.aboutCardCaption} aria-hidden="true">
          <span>
            <b className={styles.aboutCardCaptionStrong}>Fig. 02</b> —{" "}
            {ABOUT.image.caption.replace("Fig. 02 — ", "")}
          </span>
          <span>{ABOUT.image.year}</span>
        </div>
      </div>
    </Reveal>
  );
}
