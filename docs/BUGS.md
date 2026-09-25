# 🐛 Relatório de Defeitos e Inconformidades (BUGS.md)

**Projeto:** Landing Page Apoia.se — SouJunior  
**Responsável pelo Teste:** Simone Blasse  
**Ambiente:** Mobile (Emulação iPhone SE — 375px) / Desktop  
**Data:** 20/09/2026

---

## 📊 Resumo de Defeitos Encontrados

| ID                 | Bug / Inconformidade                           | Seção / Componente              | Gravidade | Status |
| :----------------- | :--------------------------------------------- | :------------------------------ | :-------: | :----: |
| **BUG-01 (TC-02)** | Quebra de layout e texto cortado no mobile     | Layout Geral / Cards Inferiores |   Média   | Aberto |
| **BUG-02 (TC-05)** | Botão "Conhecer a SouJunior" inativo ao clique | CTA Secundário / Banner         |   Alta    | Aberto |
| **BUG-03 (TC-11)** | Tempo de carregamento superior a 3,0s em 4G    | Performance Geral               |   Média   | Aberto |

---

## 🔍 Detalhamento dos Bugs

### 🔴 BUG-01 [TC-02]: Integridade Visual e Ausência de Rolagem Lateral no Mobile

- **Componente Afetado:** Layout Geral / Cards Inferiores
- **Severidade:** Média (Prejudica a experiência do usuário e a leitura)
- **Ambiente:** Mobile (iPhone SE — 375px)

````gherkin
Cenário: Integridade visual e ausência de barra de rolagem lateral no mobile
  Dado que o usuário está navegando no site em uma tela de dispositivo móvel (375px — iPhone SE)
  Quando ele realiza a rolagem vertical para visualizar as seções e cards do site
  Então os textos e imagens devem se ajustar perfeitamente ao tamanho da tela, sem criar barra de rolagem horizontal nem cortar informações
  Resultado Esperado: Elementos textuais e visuais perfeitamente responsivos e legíveis.
Resultado Real: Os textos dos cards e rótulos do menu inferior aparecem cortados lateralmente (ex.: "Instituto SouJunior Experiência real Dest….").
Status: 🔴 [X] FAIL

### 🔴 BUG-02 [TC-05]: Inatividade do Botão "Conhecer a SouJunior"
* **Componente Afetado:** CTA Secundário / Banner Institucional
* **Severidade:** Alta (Funcionalidade de navegação interrompida)
* **Ambiente:** Mobile e Desktop

```gherkin
Cenário: Clique no botão secundário "Conheça a SouJunior"
  Dado que o usuário visualiza o botão "Conhecer a SouJunior"
  Quando ele clica no botão
  Então o sistema deve direcionar o usuário para a seção institucional descritiva do projeto
  Resultado Esperado: Redirecionamento correto para a área informativa do projeto.
Resultado Real: O botão encontra-se completamente inativo e não dispara nenhuma ação ao ser clicado.
Status: 🔴 [X] FAIL

### 🔴 BUG-03 [TC-11]: Tempo de Carregamento Excedido em Conexão Móvel 4G
* **Componente Afetado:** Performance / Carregamento Geral
* **Severidade:** Média (Pode levar o usuário a abandonar a página)
* **Ambiente:** Emulação Chrome DevTools (Network 4G)

```gherkin
Cenário: Tempo de carregamento da página em conexão 4G
  Dado que o usuário acessa o site simulando uma rede móvel 4G no DevTools
  Quando a página é carregada pela primeira vez
  Então o tempo total de carregamento de todos os recursos não deve ultrapassar 3,0 segundos
  Resultado Esperado: Carregamento e renderização completa em até 3,0 segundos.
Resultado Real: O tempo de carregamento total da página excedeu o limite máximo estipulado de 3,0 segundos.
Status: 🔴 [X] FAIL
````
