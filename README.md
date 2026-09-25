# SouJunior Apoia.se Landing

Landing page desenvolvida no Hackathon SouJunior para captação de apoiadores via [Apoia.se](https://apoia.se/), apresentando a missão da comunidade, seu impacto social e chamadas para ação que direcionam o visitante à doação.

**Repositório:** https://github.com/inovacao-squad/soujunior-apoiase-landing \
**Deploy:** https://soujunior-apoiase-landing.vercel.app/

---

## 📋 Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Vídeo do projeto](#vídeo-do-projeto)
- [Escopo funcional](#escopo-funcional)
- [Stack tecnológica](#stack-tecnológica)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Padrões de código](#padrões-de-código)
- [Boas práticas](#boas-práticas)
- [Testes e QA](#testes-e-qa)
- [Contribuição](#contribuição)
- [Equipe](#equipe)
- [Licença](#licença)

---

## Sobre o projeto

O objetivo da landing page é:

- divulgar o programa e a missão da SouJunior;
- apresentar o impacto gerado pelas doações;
- construir uma narrativa clara de conversão de visitante em apoiador;
- direcionar os usuários para a página oficial da campanha no Apoia.se;
- servir de base para uma página responsiva e pronta para pré-lançamento.

**Métrica de sucesso:** taxa de conversão de visitante em doador. Acessos e visualizações são métricas auxiliares, não substituem a conversão real.

> A meta numérica de novos doadores/mês será definida com o time responsável antes do lançamento.

---

## Vídeo do projeto

Vídeo de apresentação da iniciativa SouJunior Apoia.se, com uma visão geral do projeto e de sua proposta de impacto:

[Assistir ao vídeo no YouTube](https://www.youtube.com/watch?v=busH8_XXO9c)

---

## Escopo funcional

A página deve comunicar o propósito da iniciativa rapidamente, gerar confiança e incentivar a doação. Estrutura prevista:

1. **Hero** — mensagem de impacto + CTA principal **"Doar agora"**;
2. **O problema** — acesso de jovens à tecnologia;
3. **Como a doação vira impacto** — explicação da transformação gerada;
4. **Prova social** — números, depoimentos e parceiros;
5. **Uso da doação** — explicação tangível de onde o dinheiro vai;
6. **Rodapé institucional** — CNPJ, contatos e redes sociais.

O CTA principal aparece no hero e se repete ao longo da página. Para visitantes que ainda não estão prontos para doar, há um CTA secundário (ex.: **"Conhecer o programa"** ou **"Receber novidades"**).

**Critérios de aceite:**

- o visitante entende o propósito da iniciativa em até 5 segundos no hero;
- o CTA de doação é visível sem exigir rolagem completa;
- o redirecionamento para a página da SouJunior no Apoia.se funciona;
- carregamento abaixo de 3 segundos em conexão 4G;
- tracking de conversão ativo e testado antes do lançamento.

---

## Stack tecnológica

| Tecnologia                                  | Versão   |
| ------------------------------------------- | -------- |
| [Next.js](https://nextjs.org/) (App Router) | `16.3.5` |
| [React](https://react.dev/)                 | `19.2.8` |
| TypeScript                                  | —        |
| CSS Modules                                 | —        |
| ESLint                                      | `9`      |
| [Prettier](https://prettier.io/)            | —        |

---

## Pré-requisitos

- Node.js `24.0.0` ou superior (série `24.x`)
- npm `11.19.0` ou superior

As versões esperadas estão declaradas no `package.json` (campo `engines`) e no `.nvmrc`. Com [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install
nvm use
```

Confirme as versões instaladas:

```bash
node --version
npm --version
```

---

## Como rodar o projeto

**1. Clonar o repositório**

```bash
git clone https://github.com/inovacao-squad/soujunior-apoiase-landing.git
cd soujunior-apoiase-landing
```

**2. Instalar dependências**

```bash
npm install
```

**3. Variáveis de ambiente**

O projeto não utiliza variáveis de ambiente no momento. Caso novas integrações sejam adicionadas, documentar aqui nome e finalidade de cada variável, sem incluir valores sensíveis no repositório.

**4. Ambiente de desenvolvimento**

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). Para encerrar, `Ctrl+C`.

**5. Validar o código**

```bash
npm run lint
npm run format:check
```

**6. Build de produção**

```bash
npm run build
npm run start
```

Disponível em [http://localhost:3000](http://localhost:3000). Rode `npm run build` novamente sempre que o código for alterado.

---

## Scripts disponíveis

| Comando                | Finalidade                                         |
| ---------------------- | -------------------------------------------------- |
| `npm run dev`          | inicia o servidor de desenvolvimento               |
| `npm run build`        | gera o bundle otimizado para produção              |
| `npm run start`        | inicia a aplicação a partir do build de produção   |
| `npm run lint`         | executa o ESLint                                   |
| `npm run format`       | formata o código com Prettier (reescreve arquivos) |
| `npm run format:check` | verifica formatação sem alterar arquivos           |

> Não há script automatizado de testes/cobertura configurado no `package.json`.

---

## Estrutura do projeto

O projeto usa **App Router** com **colocation**: cada rota guarda seus próprios componentes em `_components/`. Componentes verdadeiramente compartilhados ficam em `src/components/`.

> **Regra de ouro:** `components/`, `lib/` e `types/` só existem quando há código real que pertença a elas. Não criar pastas vazias.

```
src/
├── app/
│   ├── layout.tsx                # Layout raiz + metadata global (SEO)
│   ├── globals.css               # Estilos globais
│   ├── page.tsx                  # Landing page (rota /)
│   ├── robots.ts                 # Geração automática do robots.txt
│   ├── sitemap.ts                # Geração automática do sitemap.xml
│   └── _components/              # Componentes exclusivos da landing, um por seção
│       ├── header/
│       ├── hero-section/
│       ├── about-section/          # Missão, narrativa e números de impacto
│       ├── problem-section/        # O problema do acesso à tecnologia
│       ├── transparency-section/   # Uso da doação + FAQ
│       ├── participate-section/    # Como apoiar / CTAs
│       ├── closing-section/        # Fechamento e reforço de marca
│       └── footer/
│
├── components/                   # Componentes globais reutilizáveis
│   ├── reveal/                   # Animações de entrada (scroll reveal)
│   └── ui/                       # Elementos atômicos de UI
│       ├── container/
│       ├── section/
│       ├── label/
│       └── icons/                # Ícones SVG usados na landing
│
└── lib/
    └── site-config.ts            # Configurações e constantes do site
```

| Diretório                     | Responsabilidade                               |
| ----------------------------- | ---------------------------------------------- |
| `src/app/`                    | Rotas, layouts e páginas (App Router)          |
| `src/app/<rota>/_components/` | Componentes específicos de uma rota            |
| `src/components/`             | Componentes globais reutilizáveis              |
| `src/components/ui/`          | Elementos atômicos de UI                       |
| `src/lib/`                    | Funções utilitárias, clientes de API, configs  |
| `src/types/`                  | Tipos TypeScript compartilhados                |
| `public/`                     | Arquivos estáticos (imagens, favicons, fontes) |

**Quando usar cada pasta:**

- Específico da página → `src/app/<rota>/_components/` (ex.: `HeroSection` que só existe na landing)
- Reutilizável em várias rotas → `src/components/` (ex.: `Button` usado em várias páginas)
- Utilitário puro → `src/lib/` (ex.: `formatCurrency()`, `fetchDonations()`)

> 💡 `_components` usa underscore por convenção oficial do Next.js: qualquer pasta dentro de `app/` vira rota pública, a menos que comece com `_`. Isso evita URLs indesejadas como `/_components/header`.

---

## Padrões de código

### Nomenclatura

| Tipo                  | Convenção    | Exemplo                               |
| --------------------- | ------------ | ------------------------------------- |
| Arquivos e diretórios | `kebab-case` | `user-card.tsx`, `format-currency.ts` |
| Componentes React     | `PascalCase` | `export function DonationForm() {}`   |
| Funções e variáveis   | `camelCase`  | `const userName = "Andre"`            |
| Constantes            | `camelCase`  | `const maxDonationAmount = 1000`      |
| Tipos e interfaces    | `PascalCase` | `type Donation = { amount: number }`  |

```tsx
// Arquivo: hero-section.tsx
export function HeroSection() {
  return <section>...</section>;
}
```

Evite nomes como `HeroSection.tsx`, `hero_section.tsx` ou `heroSection.tsx`.

### Imports

Ordem: (1) módulos nativos → (2) bibliotecas externas → (3) imports internos com `@/` → (4) imports relativos → (5) estilos.

```tsx
import { useState } from "react";
import Image from "next/image";

import { Header } from "@/app/_components/header/header";
import { formatCurrency } from "@/lib/format-currency";

import styles from "./page.module.css";
```

Sempre use o alias `@/` em vez de caminhos relativos longos. Configurado em `tsconfig.json`:

```json
"paths": { "@/*": ["./src/*"] }
```

### Estilização

**CSS Modules**: cada componente tem seu `*.module.css` ao lado; classes em `camelCase` (`.header`, `.navigationItem`); `globals.css` contém apenas reset, variáveis e `body`.

---

## Boas práticas

- **Evitar duplicação** — código repetido vira utilitário ou componente compartilhado.
- **Evitar componentes gigantes** — acima de ~150 linhas ou responsabilidades demais, dividir.
- **Evitar abstrações prematuras** — criar componente/hook/utilitário só quando houver necessidade real.
- **Reutilizar com necessidade real** — global em `src/components/`, específico em `_components/`.
- **Responsabilidades claras** — um propósito por arquivo.
- **TypeScript bem tipado** — evitar `any` sem justificativa.
- **Imports absolutos com `@/`** — evita caminhos relativos longos.

Antes de abrir um PR:

```bash
npm run format
npm run lint
```

---

## Testes e QA

Planejamento, execução manual e automação de regressão da landing page.

**Cobertura:**

- responsividade e UX/UI (mobile-first);
- regras de negócio e CTAs;
- acessibilidade (WCAG) e performance em 4G;
- automação BDD com Robot Framework + SeleniumLibrary.

**Cenários automatizados (exemplos):**

| ID      | Objetivo                                                                           | Tags               |
| ------- | ---------------------------------------------------------------------------------- | ------------------ |
| `TC-01` | Exibição _above the fold_ no mobile (`414x896`): título e CTA visíveis sem rolagem | `mobile`, `ux`     |
| `TC-04` | Redirecionamento do CTA para a página de campanha no Apoia.se, em nova aba         | `funcional`, `cta` |

**Ferramentas:** Chrome DevTools (emulação mobile/rede 4G) · Google Lighthouse (acessibilidade e performance) · Python 3.x + Robot Framework + SeleniumLibrary · Google Chrome / ChromeDriver.

**Estrutura de QA:**

```
docs/
├── BUGS.md                              # Relatório de defeitos
├── Plano_de_Testes_SouJunior.pdf        # Plano de testes detalhado
├── Relatório de Inspeção de QA - SEO.pdf
└── Relatório de Testes por Cenários.pdf # Especificação de cenários (Gherkin)
resources/
└── keywords.resource                    # Keywords, variáveis e seletores (BDD)
tests/
└── landing_page.robot                   # Casos de teste automatizados
TESTS.md                                 # Matriz e especificações dos testes
```

Validação automatizada disponível:

```bash
npm run lint
```

> Não existe meta de cobertura automatizada definida para o projeto. Após a execução dos testes, atualizar esta seção com o status dos cenários manuais e os resultados de acessibilidade, performance e conversão.

---

## 📊 Google Tag Manager

Este projeto possui integração com o **Google Tag Manager (GTM)** para gerenciamento centralizado de tags, eventos e analytics.

---

# 🧪 Testes de Garantia de Qualidade (QA) — Landing Page SouJunior APOIA.se

Este repositório contém o planejamento, a documentação, a execução manual e a **automação de testes de regressão** para a **Landing Page do SouJunior APOIA.se**.

O objetivo principal é garantir a qualidade da experiência do usuário, a responsividade móvel, a acessibilidade e a integridade funcional do fluxo de apoio/doação.

---

## Contribuição

1. Crie uma branch descritiva a partir da `main` (ex.: `feat/nova-secao`, `fix/ajuste-responsividade`).
2. Faça alterações pequenas e focadas.
3. Use [Conventional Commits](https://www.conventionalcommits.org/) (ex.: `feat: adiciona secao de impacto`, `docs: atualiza instrucoes`).
4. Execute `npm run lint` e `npm run format:check` antes de abrir o PR.
5. Abra um pull request descrevendo o problema, a solução e os testes realizados.

---

## Equipe

Squad de Inovação — Hackathon SouJunior.

| Nome             | Papel          | Nível  | LinkedIn                                                                                                      |
| ---------------- | -------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| Allan Fortes     | Dev            | Mentor | [linkedin.com/in/allan-fortes-barbosa-b40520211](https://www.linkedin.com/in/allan-fortes-barbosa-b40520211/) |
| Gabriel Barba    | Dev            | Júnior | [linkedin.com/in/gabriel--barba](https://www.linkedin.com/in/gabriel--barba/)                                 |
| Simone Blasse    | QA             | Júnior | [linkedin.com/in/simoneblasse](https://www.linkedin.com/in/simoneblasse)                                      |
| Rodrigo Marques  | PO/PM          | Júnior | [linkedin.com/in/rodrigo-marques7](https://www.linkedin.com/in/rodrigo-marques7/)                             |
| Dênis Santos     | Dev            | Júnior | [linkedin.com/in/denisilva-s](https://www.linkedin.com/in/denisilva-s/)                                       |
| Michael Ribeiro  | Dev            | Júnior | [linkedin.com/in/michael-ribeiro-br](https://linkedin.com/in/michael-ribeiro-br/)                             |
| Simara Santos    | Dev            | Júnior | [linkedin.com/in/simara-santos-silva-bb5732247](https://www.linkedin.com/in/simara-santos-silva-bb5732247/)   |
| Yasmin Beviláqua | UX/UI Designer | Júnior | [linkedin.com/in/yasmin-bevilaqua](https://www.linkedin.com/in/yasmin-bevilaqua/)                             |

---

## Licença

Distribuído sob a licença [MIT](./LICENSE).
