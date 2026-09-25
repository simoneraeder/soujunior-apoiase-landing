export type RoleIconKey = "rocket" | "shield" | "globe" | "chat";

export type Role = {
  id: string;
  title: string;
  description: string;
  icon: RoleIconKey;
};

// TODO: trocar quando o link definitivo do formulário for definido
export const PARTICIPATE_FORM_URL = "https://stars.soujunior.tech/";

export const ROLES: Role[] = [
  {
    id: "junior",
    title: "Júnior",
    description:
      "Está começando na tecnologia e quer ganhar experiência real participando de projetos de verdade.",
    icon: "rocket",
  },
  {
    id: "mentor",
    title: "Mentor(a)",
    description:
      "Já atua no mercado e quer orientar, revisar código e desenvolver novos talentos.",
    icon: "shield",
  },
  {
    id: "apoiador",
    title: "Apoiador(a)",
    description:
      "Pode ajudar com divulgação, recrutamento, patrocínio ou conexões que abrem portas.",
    icon: "globe",
  },
  {
    id: "head",
    title: "Head",
    description:
      "Quer liderar squads, coordenar projetos e ajudar a construir a estratégia da comunidade.",
    icon: "chat",
  },
];
