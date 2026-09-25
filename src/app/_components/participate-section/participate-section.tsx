"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import styles from "./participate-section.module.css";

type ParticipateSectionProps = {
  children: ReactNode;
};

/**
 * Client wrapper que detecta quando a section entra no viewport
 * e marca `data-visible="true"`, disparando as animações CSS dos filhos.
 *
 * O resto da section permanece Server Component.
 * O `prefers-reduced-motion` é tratado via CSS (não aqui), para
 * evitar setState síncrono dentro do effect.
 */
export function ParticipateSection({ children }: ParticipateSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="participar"
      ref={ref}
      className={styles.participate}
      data-visible={visible ? "true" : "false"}
    >
      {children}
    </section>
  );
}
