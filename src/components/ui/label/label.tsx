import type { ReactNode } from "react";

import styles from "./label.module.css";

type LabelProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Rótulo pequeno em fonte mono, uppercase, com uma linha azul à esquerda.
 * Usado para identificar visualmente cada section da landing page.
 */
export function Label({ children, className }: LabelProps) {
  const classes = [styles.label, className].filter(Boolean).join(" ");
  return <span className={classes}>{children}</span>;
}
