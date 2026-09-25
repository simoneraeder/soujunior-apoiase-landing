import type { ComponentType } from "react";

import { IconBook } from "@/components/ui/icons/icon-book";
import { IconLayers } from "@/components/ui/icons/icon-layers";
import { IconServer } from "@/components/ui/icons/icon-server";

import type { Cost, CostIconKey } from "./transparency.data";
import styles from "./cost-card.module.css";

type IconComponent = ComponentType<{ className?: string }>;

const ICONS: Record<CostIconKey, IconComponent> = {
  server: IconServer,
  layers: IconLayers,
  book: IconBook,
};

type CostCardProps = {
  cost: Cost;
  index: number;
};

export function CostCard({ cost, index }: CostCardProps) {
  const Icon = ICONS[cost.icon];
  const variantClass = [styles.costV1, styles.costV2, styles.costV3][index];

  return (
    <article className={`${styles.cost} ${variantClass}`}>
      <span className={styles.costGhostNum} aria-hidden="true">
        0{index + 1}
      </span>
      <span className={styles.costStar} aria-hidden="true">
        ✦
      </span>
      <span className={styles.costIcon} aria-hidden="true">
        <Icon className={styles.costIconSvg} />
      </span>
      <h3 className={styles.costTitle}>{cost.title}</h3>
      <p className={styles.costDesc}>{cost.description}</p>
    </article>
  );
}
