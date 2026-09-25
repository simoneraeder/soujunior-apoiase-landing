import type { ComponentType } from "react";

import { IconArrow } from "@/components/ui/icons/icon-arrow";

import styles from "./simple-card.module.css";

type IconComponent = ComponentType<{ className?: string }>;

type SimpleCardProps = {
  variant: "v1" | "v2";
  icon: IconComponent;
  titlePre: string;
  titleWave: string;
  sub: string;
  desc: string;
  ctaLabel: string;
  ctaHref: string;
};

/**
 * Card branco clicável usado na section "Apoie a SouJunior".
 * O card inteiro é um link (abre em nova aba) e o botão fica dentro.
 * `v1` = azul (doação); `v2` = rosa (voluntariado).
 */
export function SimpleCard({
  variant,
  icon: Icon,
  titlePre,
  titleWave,
  sub,
  desc,
  ctaLabel,
  ctaHref,
}: SimpleCardProps) {
  const variantClass = variant === "v1" ? styles.v1 : styles.v2;

  return (
    <a
      href={ctaHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${variantClass}`}
    >
      <span className={styles.icon} aria-hidden="true">
        <Icon className={styles.iconSvg} />
      </span>
      <h3 className={styles.title}>
        {titlePre} {titleWave}
      </h3>
      <span className={styles.sub}>{sub}</span>
      <p className={styles.desc}>{desc}</p>
      <span className={styles.spacer} aria-hidden="true" />
      <span className={styles.cta}>
        {ctaLabel}
        <span className={styles.arrow} aria-hidden="true">
          <IconArrow className={styles.arrowSvg} />
        </span>
      </span>
    </a>
  );
}
