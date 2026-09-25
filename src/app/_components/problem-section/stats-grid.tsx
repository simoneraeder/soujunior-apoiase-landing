"use client";

import { Reveal } from "@/components/reveal/reveal";

import { Counter } from "./counter";
import {
  CompassIcon,
  FlagIcon,
  GiftIcon,
  UsersIcon,
  type IconProps,
} from "./icons";
import styles from "./iniciativas-section.module.css";
import { JSX } from "react/jsx-runtime";

type StatItem = {
  label: string;
  deco: "users" | "gift" | "flag" | "compass";
  value?: number;
  prefix?: string;
  text?: string;
};

const STATS: StatItem[] = [
  {
    value: 120,
    prefix: "+",
    label: "Voluntários ativos na comunidade",
    deco: "users",
  },
  { text: "100%", label: "Gratuito para quem participa", deco: "gift" },
  { text: "2022", label: "Ano de fundação do instituto", deco: "flag" },
  { text: "1", label: "Propósito: abrir caminhos", deco: "compass" },
];

const DECO_ICONS: Record<StatItem["deco"], (props: IconProps) => JSX.Element> =
  {
    users: UsersIcon,
    gift: GiftIcon,
    flag: FlagIcon,
    compass: CompassIcon,
  };

export function StatsGrid() {
  return (
    <div className={styles.statsInline}>
      <div className={styles.statsGrid}>
        {STATS.map((stat, i) => {
          const Deco = DECO_ICONS[stat.deco];
          return (
            <Reveal key={stat.label} delay={i * 90}>
              <article className={styles.statCard}>
                <div className={styles.statCardTop}>
                  <span className={styles.statKicker}>0{i + 1} / 04</span>
                  <span className={styles.statDeco} aria-hidden="true">
                    <Deco />
                  </span>
                </div>
                <div className={styles.statCardNum}>
                  {stat.value != null ? (
                    <Counter value={stat.value} prefix={stat.prefix} />
                  ) : (
                    stat.text
                  )}
                </div>
                <p className={styles.statCardLabel}>{stat.label}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
