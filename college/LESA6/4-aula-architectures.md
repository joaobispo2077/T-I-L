# Arquiteturas

## Monolitos

- Em tempo de execução, tudo roda em um único processo ou serviço.

### Escalabilidade com monolitos

- Deve-se escalar o monolito inteiro, mesmo quando o gargalo
de desempenho está em um único módulo

- Release é mais lento


## Arquitetura Orientada a Serviços (SOA)

SOA é uma abordagem arquitetural corporativa que permite a criação de serviços de negócio interoperáveis que podem facilmente ser reutilizados e compartilhados entre aplicações e empresas.

- Complexidade na governança dos serviços.
- Escalabilidade mais complexa

## Microsserviços

● Módulos (ou conjuntos de módulos) viram processos independentes em tempo de execução


### Escalabilidade com microsserviços

● Pode-se escalar apenas o módulo com problema de
desempenho

### Flexibilidade para Releases de microsserviços

● Times ganham autonomia para colocar microsserviços em produção.

### Outras vantagens de microsserviços

- Tecnologias diferentes
- Falhas parciais. Exemplo: apenas o sistema de recomendação
pode ficar fora do ar

### Quando não usar microserviços?

○ Sistema distribuído (gerenciar centenas de processos)
○ Latência (comunicação é via rede)
○ Transações distribuídas

### Benefícios
- Mais fácil de desenvolver, testar, implantar e dimensionar
- Coesão entre as partes
- É mais prático para executá-lo


