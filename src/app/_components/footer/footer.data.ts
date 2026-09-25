export type SocialIconKey =
  | "linkedin"
  | "instagram"
  | "youtube"
  | "twitter"
  | "twitch"
  | "telegram"
  | "github";

export type Social = {
  name: string;
  url: string;
  icon: SocialIconKey;
};

export type NavLink = {
  label: string;
  href: string;
};

export const SOCIALS: Social[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/soujunior/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/soujunior.tech/",
    icon: "instagram",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC3qp3wN75rI8TW7o5eGilYQ",
    icon: "youtube",
  },
  {
    name: "Twitter",
    url: "https://mobile.twitter.com/SouJunior_Tech",
    icon: "twitter",
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/soujunior",
    icon: "twitch",
  },
  {
    name: "Telegram",
    url: "https://t.me/soujunior",
    icon: "telegram",
  },
  {
    name: "GitHub",
    url: "https://github.com/SouJunior/",
    icon: "github",
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#topo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Iniciativas", href: "#iniciativas" },
  { label: "Participar", href: "#participar" },
  { label: "Transparência", href: "#transparencia" },
  { label: "Apoiar", href: "#apoie" },
];
