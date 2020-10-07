# MongoDB
## Vantagens e desvantagens
Uma situação onde o MongoDB é bastante usado é quando precisamos realizar buscas por proximidade, como, por exemplo, localizar a pizzaria mais próxima de você.

Situações onde o uso do MongoDB não é indicado são cenários onde precisamos fazer muitas operações de agregação em uma única query, isso tem muito custo para o MongoDB.

## QUERY SQL VS QUERY NOSQL

- Criar tabela X Criar coleção

`CREATE TABLE alunos (id INTEGER AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), data_nascimento DATE);`

`db.createCollection("alunos");`


- Inserir Tabela X inserir coleção
`INSERT INTO alunos VALUES (1, "Sofia", "20000215");`

`db.alunos.insert({
    nome : "Viviane",
    data_nascimento : new Date (2000, 02, 15),
    curso : {
        nome: "Medicina"
    },
    habilidades : [
        {
            nome: "espanhol",
            nivel: "intermediario"
        },
                {
            nome: "ingles",
            nivel: "fluente"
        }
    ]
    })
`

- Mostrar todos

`SELECT * from alunos`

`db.alunos.find()`

- Remoção de dados


`db.alunos.remove({
    "_id": ObjectId("5f7e1a5431e6b23d6bc70ff1")
})



# RELACIONAL X NÃO RELACIONAL


`CREATE TABLE cursos (id INTEGER PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255));`
`CREATE TABLE alunos (id INTEGER PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255), curso_id INTEGER, data_nascimento DATE);`
`CREATE TABLE notas (id INTEGER PRIMARY KEY AUTO_INCREMENT, nota DECIMAL(3,2), aluno_id INTEGER);`
`create TABLE habilidades (id INTEGER PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255), nivel VARCHAR(255), aluno_id INTEGER);`

db.createCollection("alunos");



    