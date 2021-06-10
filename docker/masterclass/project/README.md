CREATE IMAGE:

- docker build -t joaobispo:dockernode .

RUN CONTAINER:

- docker container run -p 3000:3000 -d joaobispo:dockernode

OBS: Criar um docker-compose torna não necessários os scripts acima.