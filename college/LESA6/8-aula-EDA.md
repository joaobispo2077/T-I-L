# Arquitetura orientada a eventos (EDA)

## Processamento Assíncrono

Um processo assíncrono é um processo ou função que executa uma
tarefa “em segundo plano”, sem que o usuário precise esperar que a
tarefa termine.


## Eventos

• Um evento é qualquer ocorrência ou mudança de estado significativa
no software ou hardware de um sistema.
• Uma notificação de evento é uma mensagem enviada pelo sistema
para avisar outra parte do mesmo sistema que algo ocorreu. Ela não é
o evento em si.

• Na arquitetura orientada a eventos, um evento provavelmente
desencadeará uma ou mais ações ou processos em resposta à sua
ocorrência. Eis aqui alguns exemplos de evento:

## Fila de Mensagens

• Uma fila de mensagens é uma forma de comunicação assíncrona
entre serviços usada em arquiteturas sem servidor e de
microsserviços.
• As mensagens são armazenadas na fila até serem processadas e
excluídas.
• Cada mensagem é processada uma única vez, por um único
consumidor. 

## Arquitetura orientada a eventos - Definição

• É um padrão de design de software que permite a uma organização
detectar "eventos" ou momentos de negócios importantes(como uma
transação, visita ao local, abandono do carrinho de compras, etc.) e agir
sobre eles em tempo real ou quase real.
• Este padrão substitui a arquitetura tradicional de “solicitação / resposta”,
em que os serviços teriam que esperar por uma resposta antes de
poderem passar para a próxima tarefa.
• O fluxo da arquitetura orientada a eventos é executado por eventos e é
projetado para responder a eles ou realizar alguma ação em resposta a um
evento.

• A arquitetura de eventos é uma maneira de realizarmos comunicação
entre sistemas que consiste, principalmente, em operações assíncronas,
além de permitir aplicativos mais escalonáveis e gerar menos
acoplamento entre os serviços, permitindo uma arquitetura
fortemente flexível.

• O padrão de arquitetura orientada a eventos consiste em duas principais
topologias:
• mediator
• broker. 

## Topologia - Mediator

• A topologia do mediator é útil para eventos que tem múltiplas etapas
e precisam de algum nível de orquestração para processar o evento.

• Existem quatro tipos principais de componentes dentro da topologia
do mediator:
• uma fila de eventos (event queue)
• um mediador de eventos (event mediator)
• canais de eventos (event channels)
• processadores de eventos (event processors).

### Vantagens 

• Controle sobre os fluxos de trabalho
• Lidar com erros
• Recuperabilidade
• Reiniciar as capacidades
• Melhor consistência de informações

### Desvantagens

• Processadores de evento mais acoplados
• Baixa escalabilidade
• Baixa performance
• Baixa tolerância à falhas
• Fluxos de trabalho complexo


## Topologia - Broker

• A topologia do broker se diferencia da topologia do mediator, pois nela não
há um mediador de eventos.
• Ao invés disso, o fluxo de mensagens é distribuído entre os processadores de
eventos.
• Essa topologia é útil quando você tem um fluxo de eventos relativamente simples e
você não precisa (ou não quer) orquestração de eventos.


• Existem dois tipos de componentes de arquitetura dentro da topologia do
broker:
• o broker
• processadores de eventos.
• O broker pode ser centralizado e contém todos os canais que são usados
dentro de um fluxo de eventos. Os canais de eventos dentro
do broker podem ser filas de mensagens, tópicos de mensagens ou uma
combinação de ambos.

### Vantagens

• Processadores de evento altamente desacoplados
• Altamente escalável
• Alta capacidade de resposta
• Alta performance
• Alta tolerância à falhas


### Desvantagens

• Controle sobre os fluxos de trabalho
• Lidar com erros
• Recuperabilidade
• Reiniciar as capacidades
• Inconsistência de informações

## Benefícios da EDA 

- Respostas em real-time
- Loose coupling
- Escalabilidade
- Resiliência
- Broadcasting
- Consistência e Tolerância e Falhas
