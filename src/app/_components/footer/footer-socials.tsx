import type { ComponentType } from "react";

import { IconGitHub } from "@/components/ui/icons/icon-github";
import { IconInstagram } from "@/components/ui/icons/icon-instagram";
import { IconLinkedIn } from "@/components/ui/icons/icon-linkedin";
import { IconTelegram } from "@/components/ui/icons/icon-telegram";
import { IconTwitch } from "@/components/ui/icons/icon-twitch";
import { IconTwitter } from "@/components/ui/icons/icon-twitter";
import { IconYouTube } from "@/components/ui/icons/icon-youtube";

import { SOCIALS, type SocialIconKey } from "./footer.data";
import styles from "./footer-socials.module.css";

type IconComponent = ComponentType<{ className?: string }>;

const ICONS: Record<SocialIconKey, IconComponent> = {
  linkedin: IconLinkedIn,
  instagram: IconInstagram,
  youtube: IconYouTube,
  twitter: IconTwitter,
  twitch: IconTwitch,
  telegram: IconTelegram,
  github: IconGitHub,
};

/**
 * Bloco central do Footer: 7 ícones de redes sociais em linha.
 * Cada ícone é um link que abre o perfil em nova aba.
 */
export function FooterSocials() {
  return (
    <div className={styles.socials}>
      {SOCIALS.map((social) => {
        const Icon = ICONS[social.icon];

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            className={styles.link}
          >
            <Icon className={styles.icon} />
          </a>
        );
      })}
    </div>
  );
}
