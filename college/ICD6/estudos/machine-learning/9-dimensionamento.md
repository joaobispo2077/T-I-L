# Dimensionamento de características

- Processo de transformação de dados numéricos
- Variáveis em escalas diferentes
  - Contribuem de forma desbalanceada para o modelo
  - Exemplos: salário e altura
- Gradient Descent coverge mais rapidamente para o mínimo local

## Padronização (Z-score)

- Dados aproximados da média (zero) e desvio padrão 1
- Podem ser negativos
- Não afeta outliers
- Deve ser usado na maioria dos casos

## Normalização (min-max)

- Transforma para escala comum entre 0 e 1
- Usado em processamento de imagens em RNA
- Quando não sabemos a distribuição dos dados
- Quando precisam ser positivos
- Algoritmos não requerem dados normais

## Conclusão

- Não vai necessariamnete melhorar o modelo
- Não se aplica em árvode de decisão
