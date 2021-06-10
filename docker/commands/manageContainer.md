# Container Manage

## syntax
- docker container run <options> <image:tag>

Detached vs Foreground
- Primeiro plano vs Segundo plano

## management

docker container start [name | id | 3 primeiros caracteres do id]
- inicia container parado.

docker container stop [name | id | 3 primeiros caracteres do id]
- para container em processo.

docker container ls -a -q
- retorna o id de todos os containers.

docker container rm $(docker container ls -a -q)
- remove todos os containers

## options
-p XXXX:XX
- Publica uma porta do conteiner para o host.

-d

- Roda container em segundo plano.

-P
- Pega todas portas do container e publica o host em portas aleatórias.


## class 2
### logs

docker container logs [name | id]
- mostra as últimas saídas de log da imagem.

docker container logs -f [name | id]
- acompanha a saída de logs.

docker container top [name | id]
- mostra os processos rodando do container.

docker container stats
- exibe em tempo real o status do container (uso de rede, disco, mememória, cpu e etc).

docker container stats <name>
- mostra a utilizaçao de um container específico.

docker container inspect [name | id]
- mostra todas configurações de um container.