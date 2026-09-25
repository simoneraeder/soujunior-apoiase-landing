# Planilha de Testes Manuais & Checklist de QA

**Projeto:** Landing Page Apoia.se — SouJunior / Simone Blasse  
**Versão:** 1.0 (Planejamento de Pré-Lançamento)  
**Status do Projeto:** Aguardando ambiente de Staging / Preview

---

## 1. Testes de Responsividade & UX/UI (Mobile-First)

| ID        | Seção / Componente | Cenário de Teste            | Passos de Execução                                                                        | Resultado Esperado                                                                    | Status               |
| :-------- | :----------------- | :-------------------------- | :---------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ | :------------------- |
| **TC-01** | Hero Section       | Exibição _Above the Fold_   | 1. Carregar a página em mobile (375px/667px).<br>2. Verificar elementos sem rolar a tela. | O título principal e o botão "Apoiar a Sou Junior" ficam visíveis sem rolar a página. | [X] Pass<br>[ ] Fail |
| **TC-02** | Layout Geral       | Ausência de Rolagem Lateral | 1. Redimensionar o navegador para 320px, 375px e 768px.<br>2. Fazer rolagem vertical.     | Não existe barra de rolagem horizontal; elementos ajustam a largura sem quebrar.      | [ ] Pass<br>[X] Fail |
| **TC-03** | Menu / Header      | Navegação Mobile            | 1. Abrir a página em celular.<br>2. Clicar no menu hambúrguer.                            | O menu expande suavemente com opções visíveis e botões fáceis de tocar.               | [X] Pass<br>[ ] Fail |

---

## 2. Testes Funcionais & Regras de Negócio

| ID        | Seção / Componente | Cenário de Teste             | Passos de Execução                                                                             | Resultado Esperado                                                                             | Status               |
| :-------- | :----------------- | :--------------------------- | :--------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- | :------------------- |
| **TC-04** | CTAs Principais    | Redirecionamento do Apoia.se | 1. Clicar nos botões "Doar agora" (Hero, Meio e Rodapé).                                       | Todos os CTAs abrem a página oficial do Apoia.se da SouJunior em nova aba (`target="_blank"`). | [X] Pass<br>[ ] Fail |
| **TC-05** | CTA Secundário     | Captura de Contato           | 1. Rolar até a opção "Conhecer a SouJunior".<br>2. Clicar no botão.                            | Direciona para o formulário de captura ou área institucional sem erro.                         | [ ] Pass<br>[X] Fail |
| **TC-06** | Form de Doação     | Opções de Pagamento          | 1. Selecionar os valores (R$ 50, valor livre).<br>2. Verificar botões de Pix, Cartão e Débito. | Os seletores alternam os valores e exibem as opções de Pix, Cartão e Débito Recorrente.        | [X] Pass<br>[ ] Fail |
| **TC-07** | Transparência      | Card de Impacto Social       | 1. Rolar até a seção "Transparência".                                                          | Exibe claramente o comparativo.                                                                | [X] Pass<br>[ ] Fail |
| **TC-08** | Rodapé             | Validação de Links Sociais   | 1. Rolar até o rodapé.<br>2. Clicar nos links de Discord, WhatsApp e GitHub.                   | Todos os links abrem os canais oficiais corretos da comunidade SouJunior.                      | [X] Pass<br>[ ] Fail |

---

## 3. Testes Não-Funcionais (Acessibilidade & Performance)

| ID        | Seção / Componente | Cenário de Teste             | Passos de Execução                                                         | Resultado Esperado                                                          | Status               |
| :-------- | :----------------- | :--------------------------- | :------------------------------------------------------------------------- | :-------------------------------------------------------------------------- | :------------------- |
| **TC-09** | Acessibilidade     | Navegação por Teclado (WCAG) | 1. Carregar a página.<br>2. Navegar usando apenas a tecla `Tab`.           | O foco caminha ordenadamente por botões e links, mantendo contorno visível. | [X] Pass<br>[ ] Fail |
| **TC-10** | Acessibilidade     | Descrição de Imagens (`alt`) | 1. Inspecionar as fotos e mídias da página.<br>2. Checar atributo `alt`.   | Todas as imagens institucionais possuem texto alternativo descritivo.       | [X] Pass<br>[ ] Fail |
| **TC-11** | Performance        | Tempo de Carregamento 4G     | 1. Abrir Chrome DevTools (Aba _Network_).<br>2. Emular rede 4G e carregar. | A página finaliza o carregamento completo em menos de 3,0 segundos.         | [ ] Pass<br>[X] Fail |
