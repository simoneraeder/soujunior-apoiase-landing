export type CostIconKey = "server" | "layers" | "book";

export type Cost = {
  title: string;
  description: string;
  icon: CostIconKey;
};

export type FaqEntry = {
  question: string;
  answer: string;
};

export const COSTS: Cost[] = [
  {
    title: "Estrutura e ferramentas",
    description:
      "Ambientes, serviços e ferramentas usadas nas squads e nos projetos da comunidade.",
    icon: "server",
  },
  {
    title: "Organização dos projetos",
    description:
      "Coordenação, acompanhamento e continuidade das entregas realizadas pelas equipes.",
    icon: "layers",
  },
  {
    title: "Formação e mentoria",
    description:
      "Encontros, materiais e orientação de profissionais que sustentam a jornada.",
    icon: "book",
  },
];

export const FAQ: FaqEntry[] = [
  {
    question: "Para onde vai a minha doação?",
    answer:
      "O apoio é direcionado à manutenção da estrutura da comunidade: ferramentas e serviços usados nos projetos, organização das squads, acompanhamento das entregas e atividades de mentoria e desenvolvimento das pessoas participantes.",
  },
  {
    question: "Posso doar qualquer valor?",
    answer:
      "Sim. Você pode escolher um dos valores sugeridos ou informar o valor que fizer sentido para você. Toda contribuição ajuda a manter as atividades acontecendo.",
  },
  {
    question: "Meus dados e meu pagamento estão seguros?",
    answer:
      "O processamento do pagamento é feito por parceiros especializados, com criptografia e boas práticas de segurança. A SouJunior não armazena dados completos de cartão.",
  },
  {
    question: "A SouJunior é uma organização sem fins lucrativos?",
    answer:
      "Sim. A SouJunior é uma associação sem fins lucrativos. As informações institucionais oficiais estão disponíveis nos canais formais.",
  },
];
