import type { ReactNode } from "react";

import styles from "./container.module.css";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Wrapper de largura máxima (1280px) com padding lateral responsivo.
 * Centraliza o conteúdo horizontalmente. Não aplica padding vertical.
 */
export function Container({ children, className }: ContainerProps) {
  const classes = [styles.container, className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}
