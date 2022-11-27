# Última aula

- Escalabilidade: É a habilidade do sistema dar suporte ao
aumento da carga de trabalho

# Arquiteturas para resolver problemas de leitura e escrita

## Busca sob demanda

- Carga de leitura >  carga de postagem

## Fila para cada leitor (FanOut)

- Arquitetura híbrida


# Escalabilidade Vertical VS Horizontal

- Escalabilidade Vertical é baseada na expansão de uma rede a partir da adição de mais energia e memória à unidade de processamento princiapl, incrementar a capacidade de hardware da máquina.
- Escalabilidade horizontal envolve a adição de mais nodes (máquinas) à estrutura de um sistema já existente.

## Escalabilidade Vertical

Características:
- Não requer mudança na arquitetura, basta adicionar um hardware mais potente.
- Rapidamente pode ser alcançado o limite máximo de aumento de capacidade de hardware da máquina, pois é finito.
- Comunicação entre Processos (IPC — Inter-Process Communication) por possuir vários sistemas executando na mesma máquina.
- Ter um único ponto de falha.
- Mais consistência dos mesmos, pelo simples fato destas informações não estarem sendo concorridas por várias aplicações diferentes em locais diferentes e nem precisar de técnicas de sincronização para garantir a integridade.

## Escalabilidade Horizontal

Características:
- Balanceamento de Carga (Load Balancing)
- Resiliência
- Comunicação de Rede (RPC — Remote Process Communication)
- Inconsistência de Dados
- Escalonamento "Ilimitado"
