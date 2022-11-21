# Matriz de confusão

É cruzar os erros com os acertos para identificar os Verdadeiros positivos, Falsos negativos, falsos positivos e verdadeiros negativos.

## Generalização VS super ajuste VS sub ajuste

- O objetivo de todo classificador é criar modelos genéricos.
- O modelo super ajustado funciona bem com dados de treino, mas tem o desempenho pobre em dados de teste ou de produção.
- O modelo sub ajustado não consegue boas taxas de previsão. Ele não foi capaz de capturar as características do negócio para o modelo.

Subajustado => performance pobre em ambiente de produção E desenvolvimento pois n consegue as características do negócio
Superajustado => Ter performance pobre em ambiente d eprodução pois não consegue generalizar bem as características do negócio.

### Problema da classe rara

- Transações de Fraude: a fraude é uma classe rara
- O modelo pode ter dificuldade de aprender uma classe rara
- Solução: estratificação
