<p align="center">
  <img alt="Pokeball" src=".github/pokeball.svg" width="50px">
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Jumori/pokemon-data?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Jumori/pokemon-data">

  <a href="https://github.com/Jumori/pokemon-data/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Jumori/pokemon-data">
  </a>
</p>

<h1 align="center">
    <img alt="Pokemon" src=".github/cover.png" width="500px" />
</h1>

<br>

# 🗒️ Resumo do projeto

Neste projeto **você desenvolverá uma *página web* para visualizar um *conjunto (set) de dados*** que se adeque ao que seu usuário necessita. Entenda quem é seu usuário e o que ele necessita saber ou ver exatamente; assim já poderá criar uma interface que o ajude a interagir e entender melhor os dados. Estes são os dados que propomos:

- Pokémon: Neste set você encontrará uma lista com os 151 Pokémons da região de Kanto, junto com suas respectivas estatísticas usadas no jogo Pokémon GO.

Como produto final você terá que criar uma página web que permita **visualizar os dados, filtrá-los, ordená-los e fazer algum cálculo agregado**. Como esclarecimento, ao falar de cálculo agregado, nos referimos a diferentes cálculos que se pode fazer com os dados e trazer informações ainda mais relevantes para o usuário. Uma opção seriam cálculos estatísticos com média, mínimo e máximo. Por exemplo, se temos uma coleção que representa um grupo de pessoas e cada pessoa está representada com um *objeto* com uma *propriedade* `altura`, poderíamos calcular a altura média em um grupo, entre outras coisas.

# 🎯 **Objetivos do Projeto**

O objetivo principal deste projeto é que você desenvolva uma interface web onde se possa visualizar e manipular dados, entendendo o que o usuário necessita.

Falando com mais clareza, você irá:

- Consolidar seus conhecimentos base a respeito de construção de páginas web com HTML e CSS, lógica de programação, linguagem de programação JavaScript
- Pensar nas **necessidades dos usuários** para criar uma interface que faça sentido e com tarefas claras.
- Trabalhar com suas definições de pronto (*definition of done*) na organização e planificação de seu trabalho.
- Definir os dados e de que forma mostrá-los no produto, baseando-se em seu **entendimento de usuário**.
- Criar produtos que sigam os **princípios básicos de usabilidade**.
- Iterar o desenho do produto, baseando-se nos resultados dos **testes de usabilidade**.
- Realizar requisições utilizando `fetch` para carregar os dados a serem utilizados pelo frontend
- Manipular ***arrays* e *objetos***.
- **Manipular o DOM** (agregar elementos dinamicamente, baseados nos dados).
- **Manejar eventos do DOM** para permitir interação com o usuário (dados filtrados, ordenados, etc).

# 📌 Parte obrigatória

Os critérios para considerar que você completou o projeto são:

## **Definição do produto**

Documente brevemente seu trabalho no arquivo `README.md` de seu repositório, nos contando como foi seu processo de desenvolvimento do projeto e como acredita que seu produto resolve o problema (os problemas) do seu usuário.

## **Desenho da interface de usuário**

### **Protótipo**

Durante seu trabalho você deverá ter feito esboços de sua solução ferramentas como [Marvel](https://marvelapp.com/) ou o [Figma](https://www.figma.com/). Recomendamos que você tire fotos de todas as iterações que faça, suba para seu repositório, e as mencione em seu`README.md`, juntamente com o link para o seu protótipo.

### **Testes de usabilidade**

Durante o desafio você deverá realizar testes de usabilidade com diversos usuários. Com base nos resultados dos testes, você deverá reorganizar seu protótipo. Documente as diversas iterações para ter ideia da evolução e para conseguir resgatar ideias mais tarde.

### **Implementação de Interface de Usuário (HTML/CSS/JS)**

Logo após desenhar sua interface de usuário você deverá trabalhar em sua implementação. Como mencionamos, **não** é necessário que desenvolva uma interface tal como a desenhou. Você terá um tempo limitado para codar, então, deverá priorizar. Como mínimo, sua implementação deve:

1. Mostrar os dados em uma interface: pode ser um card, uma tabela, uma lista, etc.
2. Permitir ao usuário filtrar e ordenar os dados.
3. Calcular estatísticas como média aritmética, máximo e/ou mínimo de algum atributo numérico, ou contar quantas vezes aparece um determinado valor, por exemplo.

---

# Implementação de CI/CD

Neste projeto, você deverá implementar um pipeline de CI/CD (Integração Contínua/Entrega Contínua) para garantir que as alterações no código sejam testadas e implantadas de forma eficiente. A integração contínua permitirá que suas alterações sejam verificadas automaticamente, enquanto a entrega contínua facilitará a implementação de novas versões da aplicação.

**1. Ferramentas que você vai utilizar:**
- **GitHub Actions:** Para automatizar o fluxo de trabalho de CI/CD.
- **Node.js:** Para gerenciar as dependências do projeto e executar scripts de teste.
- **Git:** Para controle de versão do código.

**2. Pipeline de CI/CD:**
- **Construção:** Cada vez que você fizer um push para o repositório principal, o GitHub Actions irá construir a aplicação, instalando as dependências necessárias.
- **Testes:** Em seguida, você executará os testes automatizados para garantir que o código esteja funcionando corretamente. Esses testes incluirão testes unitários e de integração.
- **Implantação:** Após a passagem nos testes, a aplicação será implementada automaticamente em um ambiente de desenvolvimento ou produção, dependendo do branch em que você fez as alterações.

**3. Passos que você deverá seguir para implementação:**
- Criar um arquivo de configuração para o GitHub Actions (ex: `.github/workflows/ci-cd.yml`) onde você definirá as etapas do pipeline.
- Configurar scripts de teste em `package.json` para garantir que os testes relevantes sejam executados.
- Estabelecer as credenciais e configurações necessárias para a implementação automática.

**4. Benefícios esperados:**
- **Automação:** Você vai reduzir o tempo gasto em tarefas manuais de teste e implantação.
- **Consistência:** Você vai garantir que cada versão da aplicação seja testada e implantada com os mesmos critérios.
- **Feedback Rápido:** Você vai possibilitar a detecção e corrição rápida de erros antes que eles cheguem ao ambiente de produção.

---

# 🏆 Desafio

Features/características extras sugeridas:

- No lugar de consumir os dados de forma estática, você pode trabalhar com eles de forma dinâmica, carregando um arquivo JSON por meio de um `fetch`. Disponibilizaremos uma versão `.js` e uma `.json` de cada set de dados.
- Agregar em sua interface de usuário visualizações gráficas. Para isso, recomendamos explorar bibliotecas de gráficos como [Chart.js](https://www.chartjs.org/) ou [Google Charts](https://developers.google.com/chart/).

# ⚙️ **Considerações técnicas**

- A lógica do projeto deve estar implementada completamente em JavaScript (ES6), HTML e CSS
- Neste projeto NÃO está permitido usar bibliotecas ou frameworks, somente vanilla JavaScript, com exceção das bibliotecas para fazer gráficos (charts)
- Os dados a serem utilizados pelo frontend devem ser carregados de um arquivo JSON externo

# 🔍 **Conteúdo de referência**

## **Experiência de Usuário (UX Design)**

- Entrevistas com usuários
- Princípios de usabilidade

## **Desenvolvimento Front-end**

- Conceitos de arrays
- Conceitos de objetos
- Conceitos de funções
- Conceitos de DOM
- [Array no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
- [Array.sort no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
- [Array.map no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
- [Array.filter no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
- [Array.reduce no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
- [Array.forEach no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
- [Object.keys no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
- [Object.entries no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
- [Fetch API no MDN](https://developer.mozilla.org/pt-br/docs/Web/API/Fetch_API)
- [json.org](https://json.org/json-pt.html)

# 📝 Checklist

- [ ]  Criar um repositório no seu Github para o desenvolvimento desse projeto
- [ ]  Usar VanillaJS.
- [ ]  Inclui *Definição de produto* clara e informativa no `README.md`.
- [ ]  Inclui esboço da solução (protótipo de baixa fidelidade e de alta fidelidade, se houver) no `README.md`.
- [ ]  Inclui a lista de problema detectados através dos testes de usabilidade no `README.md`.
- [ ]  UI: Mostra lista e/ou tabela com dados e/ou indicadores.
- [ ]  UI: Permite ordenar os dados por meio de um ou mais campos (asc e desc).
- [ ]  UI: Permite filtrar os dados com base em uma condição.

# 🛠️ Materiais

## Pokémon Data

- [pokemon.js](https://github.com/Jumori/pokemon-data/blob/main/data/pokemon.js)
- [pokemon.json](https://github.com/Jumori/pokemon-data/blob/main/data/pokemon.json)


# 🦸 Autora

<a href="https://github.com/Jumori">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/44618499?s=460&u=691cddb486d4b665417d25d8a575e508d6ef9563&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Juliana Morikoshi</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Juliana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/julianamorikoshi/)](https://www.linkedin.com/in/julianamorikoshi/)
[![Gmail Badge](https://img.shields.io/badge/-julianamorikoshi@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:julianamorikoshi@gmail.com)](mailto:julianamorikoshi@gmail.com)

# 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).

Feito com ❤️ por Juliana Morikoshi 👋 [Entre em contato!](https://www.linkedin.com/in/julianamorikoshi/)

