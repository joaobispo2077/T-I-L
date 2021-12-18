RUN docker with

```sh
docker run -d --name typegraphql -p 5432:5432 -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=postgres -e POSTGRES_DB=typegraphqldb postgres
```
