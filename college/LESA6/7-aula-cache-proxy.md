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


## Cache de objetos

O cache de objetos é uma forma de armazenar resultados de consulta do banco de dados na memória RAM do servidor. Dessa forma, quando um usuário fizer uma solicitação ao banco, quem vai fornecer o resultado é o serviço do cache de objetos, em uma velocidade incrível.

## Cache de objetos persistentes

• O cache de objeto persistente ajuda a acelerar a entrega de consultas de
banco de dados e facilita a carga de trabalho do servidor, permitindo que o
cache de objeto persista entre as solicitações.
• Ferramentas populares de armazenamento em cache de objetos persistentes
incluem Memcached e Redis.


## Caching resumo

• O tipo de cache é definido de acordo com o local em que o conteúdo é armazenado.
• Cache de browser - esse armazenamento é feito no navegador. Todos os navegadores
possuem um armazenamento local, que serve normalmente para resgatar recursos
previamente acessados. Esse tipo de cache é privado, já que os recursos armazenados não
são compartilhados.
• Cache de proxy - esse armazenamento, também chamado de cache intermediário, é feito no
servidor proxy, entre o cliente e o servidor de origem. Esse é um tipo de cache compartilhado,
já que é utilizado por vários clientes, e geralmente é mantido por provedores.
• Cache de gateway - também chamado de proxy reverso, é uma camada independente,
separada, e esse armazenamento fica entre o cliente e a aplicação. Ele armazena em cache as
requisições feitas pelo cliente e as envia para a aplicação e faz o mesmo com as respostas,
enviando da aplicação para o cliente. Se um recurso for solicitado novamente, o cache retorna
a resposta, antes de chegar à aplicação. Também é um cache compartilhado, mas pelos
servidores e não pelos usuários.
• Cache de aplicação - esse armazenamento ocorre dentro da aplicação e permite que o
desenvolvedor especifique quais arquivos o navegador deve 

# Proxy Reverso

Um proxy reverso é um servidor que fica na frente dos servidores web e encaminha as solicitações do cliente (por exemplo, navegador web) para esses servidores web.

## Proxy de encaminhamento VS Proxy reverso


• Uma maneira simplificada de resumir seria dizer que
um proxy de encaminhamento reside na frente de um
cliente e garante que nenhum servidor de origem
jamais se comunique diretamente com aquele cliente
específico.

• Proxy reverso reside na frente de um servidor de origem
e garante que nenhum cliente jamais se comunique
diretamente com esse servidor de origem

## Benefícios de um proxy reverso

• Balanceamento de carga - Um site popular que recebe milhões de
usuários todos os dias pode não ser capaz de lidar com todo o
tráfego de entrada do site com um único servidor de origem. 

• Proteção contra ataque
s
• Armazenamento em cache

