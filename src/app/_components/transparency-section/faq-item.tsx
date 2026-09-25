import { Reveal } from "@/components/reveal/reveal";

import type { FaqEntry } from "./transparency.data";
import styles from "./faq-item.module.css";

type FaqItemProps = {
  item: FaqEntry;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

export function FaqItem({ item, index, isOpen, onToggle }: FaqItemProps) {
  const itemClasses = [styles.faqItem, isOpen && styles.faqItemOpen]
    .filter(Boolean)
    .join(" ");

  return (
    <Reveal className={itemClasses} delay={index * 40}>
      <h3>
        <button
          type="button"
          className={styles.faqItemQuestion}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
          onClick={onToggle}
        >
          <span className={styles.faqItemNum}>0{index + 1}</span>
          <span className={styles.faqItemText}>{item.question}</span>
          <span className={styles.faqItemSign} aria-hidden="true" />
        </button>
      </h3>
      <div id={`faq-panel-${index}`} className={styles.faqItemAnswer}>
        <div className={styles.faqItemAnswerInner}>
          <p className={styles.faqItemAnswerText}>{item.answer}</p>
        </div>
      </div>
    </Reveal>
  );
}
