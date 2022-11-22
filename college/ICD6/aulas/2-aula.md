# Transformação de Dados

Transformar dados é alterar sua estrutura para torná-lo adequado a um processo específico, normalmente um processo de análise ou mesmo construção de data warehouse.

Por que transformar um dado?

- Para torná-lo adequado a um processo específico

A transformação de dados é necessária porque dados são produzidos em uma estrutura
otimizada para persistência e processamento: estas estruturas não são boas para outras
operações, como análise de dados

# ETL

É um processo de integração de dados que consiste em três etapas:

- Extração: Obter os dados de uma fonte de dados
- Transformação: Transformar os dados para um formato adequado
- Carga (Load): Carregar os dados em um destino de dados

# Armazenamento Analítico

## Data Warehouse

É um repositório de dados que armazena dados históricos de uma organização, que são usados para análise e tomada de decisão. Diferentemente de um SGBD, um data warehouse é otimizado para análise de dados e você apenas inclui os dados.

- Subject-oriented: Os dados são organizados por assunto, não por entidade.

## Data Marts

É um agrupamento dentro do data warehouse.

## Fatos, Dimensões e Medidas

Fato: Um fato é um evento ou ocorrência que ocorre em um determinado período de tempo. Por exemplo, uma venda de um produto em uma loja.

Dimensão: Uma dimensão é uma característica ou atributo de um fato. Por exemplo, o produto vendido, o vendedor, o cliente, a data da venda, etc.

Medida: Uma medida é um valor numérico associado a um fato. Por exemplo, o valor da venda, o custo do produto, etc.

## Granularidade

Granularidade é a menor unidade de tempo ou espaço que um dado pode ser medido.

# OLAP

É uma técnica de análise de dados multidimensional que permite a análise de dados em diferentes perspectivas.

# Business Intelligence

É um conjunto de técnicas e ferramentas que permitem a análise de dados para tomada de decisão.
