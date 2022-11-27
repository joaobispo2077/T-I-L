# Balanceamento de carga


O “Load Balance” distribui as cargas do servidor em vários recursos.

## Funções de um Load Balance

• Distribuir solicitações de cliente ou carga de rede de forma eficiente em vários servidores;
• Garantir alta disponibilidade e confiabilidade enviando solicitações apenas para servidores que estão online;
• Oferecer flexibilidade para adicionar ou subtrair servidores conforme a demanda dita

## Algoritmos de balanceamento de carga dinâmico

Possui alguns algoritmos como:

- Menos conexões
- Menos conexões ponderadas
- Tempo de resposta ponderado
- Baseado em recursos

## Algoritmos de balanceamento de carga estático

- Round robin: por igual para todos
- Round robin ponderado
- IP hash

## Balancemento por Software e Hardware

Software:
- haproxy, nginx

Hardware:
- Swtich, roteador como da Cisco

## Conclusão

Por fim, vale lembrar que os “Load Balance” garante confiabilidade e disponibilidade monitorando a “saúde” dos app e enviando apenas solicitações a servidores e apps que podem responder em tempo hábil

# Afinidade de Sessão (Sticky Sessions)

Na estratégia Sticky Session ou Session Affinity o load balancer sempre vai rotear o
mesmo usuário para o mesmo servidor de forma a assegurar que os dados (estado)
sejam encontrados na memória daquele servidor específico.

Nos casos em que você já possui uma aplicação que armazena estado nos servidores
(Stateful) e precisa escalar horizontalmente mesmo assim também há uma saída
conhecida como Sticky Session.

# Balanceador de carga da camada 4 modelo OSI

Funciona na camada de transporte, usando os protocolos TCP e UDP para gerenciar o tráfego de transações com base em um algoritmo simples de balanceamento de carga e informações básicas, como conexões de servidor e tempos de resposta.
Operando no nível de transporte, gerencia o tráfego com base nas informações de rede, como portas e protocolos de aplicativos, sem visibilidade do conteúdo real das mensagens.

# Balanceador de carga da camada 7 modelo OSI

Um balanceador de carga de camada 7 funciona na camada de aplicativo - a camada mais alta do modelo OSI - e toma suas decisões de roteamento comn base em informações mais detalhadas, como as características do HTTP/HTTPS cabeçalho, conteúdo da mensagem, tipo de URL e dados de cookies.

# Sessões
A sessão é armazenada em um sistema externo ao invés da memória de cada application server

