export type AboutFact = {
  label: string;
  value: string;
};

export type AboutData = {
  label: string;
  title: [string, string];
  image: {
    src: string;
    alt: string;
    tag: string;
    caption: string;
    year: string;
  };
  bignum: {
    value: string;
    suffix: string;
    title: string;
    desc: string;
  };
  facts: AboutFact[];
  signature: string;
};

export const ABOUT: AboutData = {
  label: "Sobre nós",
  title: ["Nascemos da inquietação", "de quem viu a barreira de perto."],
  image: {
    src: "/images/about/team.webp",
    alt: "Comunidade SouJunior em atividade",
    tag: "✦ nossa gente",
    caption: "Fig. 02 — Times voluntários",
    year: "2025",
  },
  bignum: {
    value: "120",
    suffix: "+",
    title: "Voluntários",
    desc: "atuando entre mentores, líderes e juniores em formação",
  },
  facts: [
    { label: "Fundação", value: "Julho · 2022" },
    { label: "Idealizador", value: "Wouerner Brandão" },
    { label: "Modelo", value: "Voluntariado" },
  ],
  signature: "Instituto SouJunior",
};

export const MARQUEE = [
  "Instituto SouJunior",
  "Experiência real",
  "Desde 2022",
  "SouJunior Labs",
  "SouJunior Talk",
  "Projetos voluntários",
  "Comunidade aberta",
  "Sem fins lucrativos",
  "Oportunidade",
];
