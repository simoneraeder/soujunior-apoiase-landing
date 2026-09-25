import type { ReactNode } from "react";

import styles from "./section.module.css";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  "aria-labelledby"?: string;
};

/**
 * Wrapper de `<section>` com padding vertical responsivo (clamp).
 * Aceita `id` e `aria-labelledby` para âncoras e acessibilidade.
 */
export function Section({
  children,
  id,
  className,
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) {
  const classes = [styles.section, className].filter(Boolean).join(" ");
  return (
    <section id={id} aria-labelledby={ariaLabelledBy} className={classes}>
      {children}
    </section>
  );
}
