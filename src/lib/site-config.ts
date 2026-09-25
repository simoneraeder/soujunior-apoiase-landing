/**
 * Configuração central de URLs e identidade do site.
 *
 * Motivação:
 *  - Um único lugar para trocar domínio, forms, redes sociais etc.
 *  - Evita URLs hardcoded espalhadas em componentes (um dos problemas
 *    do index.html original, onde `SITE` vivia dentro do `<script>`).
 *  - Cada valor pode ser sobrescrito por env var quando fizer sentido
 *    (ex.: link do formulário muda por ambiente/campanha).
 *
 * Convenção: URLs terminam SEM barra final para não gerar `//` ao
 * concatenar com paths (`${SITE.officialUrl}/labs` → ok).
 */
export const SITE = {
  /** URL canônica do site — usada em metadataBase, Open Graph, sitemap e robots. */
  url: "https://soujunior-apoiase-landing.vercel.app",

  /** Landing do SouJunior Labs — acelerador de carreira via projetos. */
  labsUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSd1IspO3Hwylce2kHtIsmyBAkH7p3VFmdYUmdL75YXZ-DSNBA/viewform",

  /** Landing do SouJunior Talk — prática de inglês em grupo. */
  talkUrl: "https://discord.com/invite/564CDre9F3",
} as const;

/**
 * Redes sociais da SouJunior.
 * Separado de `SITE` porque o formato é diferente (array ordenado,
 * consumido em loop pelo footer) e porque essas URLs raramente são
 * referenciadas fora do rodapé.
 */
