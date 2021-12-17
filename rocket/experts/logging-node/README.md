<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# Melhorando Logs do Node.js com TypeScript, Pino.js e LogDNA

## Descrição

Nesta aula nós exploramos uma forma de melhorar os Logs das nossas aplicações através dos seguintes passos:

- Remoção de console.log;
- Criação de Types para abstrair o nosso Logger;
- Utilização do Pino para logging;
- Pino-pretty para melhorar o visual dos nossos logs em ambiente local;
- Utlização do LogDNA para visualização e controle dos nossos Logs.

A performance foi um ponto chave durante toda a aula. Expliquei o quão problematico o `console` é, e o como os mecanismos do Pino melhoram essa questão.


## Projeto

### Domínio

O projeto consiste em um código bem simples, centrado nas abstrações entre Logger e Aplicação. Abordamos mais algumas pontas de forma bem sucinta:
- Abstração do módulo de Config;
- Parametrizando argumentos dos npm scripts;

## Repositório

Este repositório conta com duas branches:
- `main`: esta branch contém o conteúdo inicial da aula, apenas com a estrutura do projeto;
- `final`: esta branch contém o conteúdo final da aula, com o histórico de Commits seguindo cada passo da aula.


## Dependências

- [npm 6.14.15](https://www.npmjs.com/)
- [Node.js 14.17.6](https://nodejs.org/en/)
- Conta na [IBM Cloud](https://cloud.ibm.com/)
- Serviço do [LogDNA](https://cloud.ibm.com/catalog/services/logdna)


## Scripts

- `npm ci`: Instala as dependências via npm;
- `start:local`: Executa a aplicação juntamente com o Prettier de Logs;
- `start:prod`: Executa a aplicação sem o Prettier de Logs;


## Rodando o projeto localmente

1. Instale o Node.js (já vem com o npm) através do link disponibilizado acima;
2. Atualize o arquivo `.env` com a sua Key para o LogDNA;
3. Execute o comando `npm ci`;
4. Execute o comando `npm run start:local` ou `npm run start:prod` para executar o código e ver os resultados;
5. Modifique os logs no arquivo `app.ts` para modificar os resultados.


## Links

- [IBM Node.js Reference Architecture](https://github.com/nodeshift/nodejs-reference-architecture)
- [Introduction to the Node.js reference architecture, Part 1: Overview](https://developers.redhat.com/blog/2021/03/08/introduction-to-the-node-js-reference-architecture-part-1-overview)
- [Pino.js](https://getpino.io/)
- [LogDNA](https://www.logdna.com/)
- [pino-logdna](https://www.npmjs.com/package/pino-logdna)


## Expert

| [<img src="https://avatars.githubusercontent.com/u/18530419?v=4" width="75px;"/>](https://github.com/LcsK) |
| :-: |
|[Lucas Lopes](https://github.com/LcsK)|
