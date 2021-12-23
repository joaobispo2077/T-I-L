# [Template] Implementando Autorização em Node.js com Bitwise Operators

<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

*Esse repositório não contém o código finalizado e sim o template para dar início à aula.*

No nosso cotidiano, dificilmente lidamos com representações binárias e muito menos bom bitwise operators. Entre os motivos podem estar a dificuldade no entendimento ou a falta de aplicações práticas.

Neste workshop eu trago uma implementação de autorização para acesso a recursos utilizando bitwise operators, que pode ser interessante conhecer.

## Expert

| [<img src="https://avatars.githubusercontent.com/u/711732?s=460&u=6b1039f8a921c5733d92d13b2971c55157fee005&v=4" width="75px;"/>](https://github.com/askmon) |
| :-: |
|[André Spanguero Kanayama](https://github.com/askmon)|

## Rodando o projeto

Este projeto consiste de uma API feita em Node.js que consome um banco PostgreSQL. Há um arquivo `.nvmrc` no projeto caso queira realizar a instalação usando o [nvm](https://github.com/nvm-sh/nvm).

Para rodar o projeto é necessário rodar um banco PostgreSQL, sugiro o uso do docker e docker-compose. O projeto já contém um arquivo do docker-compose, então basta usar o seguinte comando:

`docker-compose up`

Usei o dotenv para variáveis de ambiente, então pode-se renomear o arquivo `.env.example` para `.env` e aproveitar as variáveis de ambiente de lá. Por padrão elas apontam para o banco PostgreSQL so docker-compose.

O próximo passo é instalar as depêndencias:

`npm install`

Depois é necessário rodar a migration para criar as tabelas no banco:

`npm run sequelize:migrate`

E então pode-se rodar com nodemon:

`npm run dev`

Para facilitar os testes dos endpoints, pode ser usado o arquivo `JWT.postman_collection.json`.
