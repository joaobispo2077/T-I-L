# Cache

É um mecanismo de reutilização computacional que grava em uma área temporária dados que possuem uma grande probabilidade de serem utilizados novamente.

## Quando usar cache?

• Muitas vezes começa com uma observação sobre a latência ou a eficiência de uma dependência com uma taxa de solicitação específica.

• Achamos útil considerar o uso do cache diante de padrões de solicitação irregulares que causam o controle da utilização de hot-key/hot-partition (Dados que são frequentemente requisitados).

## Quando não usar cache?

- Se cada solicitação normalmente precisa realizar uma consulta exclusiva no serviço dependente, com resultados exclusivos por solicitação, o cache teria uma taxa de acertos negligenciável e não seria bom.
- Uma segunda consideração é o nível de tolerância do serviço de uma equipe e de seus clientes a uma consistência eventual. O crescimento dos dados em cache ao longo do tempo necessariamente gera inconsistência com a fonte.

## Armazenamento em cache

A taxa de alteração dos dados em relação à fonte e a política de cache para atualização dos dados determinarão o nível de inconsistência dos dados. Esses dois aspectos relacionados entre si.

Por exemplo:
1. Dados relativamente estáticos.
2. Dados que mudam devagar podem ser armazenados
em cache por períodos mais longos.

## Localização do cache

- Local, utlizando recursos do servidor
- Distribuído, utilizando servidores especializados em cache

### Cache local

Vantagem: Não tem I/O de rede.

Desvantagem: Difícil invalidação, limitado ao servidor.

### Cache distribuído

Vantagem: Fácil invalidação e escalabilidade
Desvantagem: I/O de rede

## Política de troca

Qual regra utiliza para saber o que é mais releventa para o cache?
- Política mais comum para aplicações web é o LRU (elemento recentemente menos usado)

## Invalidação

Opções
- A cada ação que altera o dado
- Por tempo

## CDN - Conteúdo estático

Uma CDN (Rede de Entrega de Conteúdo) é um grupo de servidores geograficamente distribuídos que aceleram a entrega do conteúdo da Web, aproximando-o de onde os usuários estão.



