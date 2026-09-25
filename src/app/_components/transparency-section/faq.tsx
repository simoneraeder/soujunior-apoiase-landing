"use client";

import { useState } from "react";

import { Reveal } from "@/components/reveal/reveal";
import { IconSparkle } from "@/components/ui/icons/icon-sparkle";

import { FAQ } from "./transparency.data";
import { FaqItem } from "./faq-item";
import styles from "./faq.module.css";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className={styles.faq}>
      <Reveal delay={80}>
        <div className={styles.faqHeading}>
          <h3 className={styles.faqHeadingTitle}>
            <span className={styles.faqEmoji} aria-hidden="true">
              <IconSparkle className={styles.faqEmojiSvg} />
            </span>
            Perguntas frequentes
          </h3>
          <span className={styles.faqHint}>clica pra abrir ✦</span>
        </div>
      </Reveal>

      <div className={styles.faqList} id="faq">
        {FAQ.map((item, i) => (
          <FaqItem
            key={item.question}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    </div>
  );
}
