# MongoDB
## Vantagens e desvantagens
Uma situação onde o MongoDB é bastante usado é quando precisamos realizar buscas por proximidade, como, por exemplo, localizar a pizzaria mais próxima de você.

Situações onde o uso do MongoDB não é indicado são cenários onde precisamos fazer muitas operações de agregação em uma única query, isso tem muito custo para o MongoDB.

## QUERY NOSQL

- Criar COllection
`db.createCollection("alunos");`

- Inserir dados

`db.alunos.insert({ nome : "Viviane",  data_nascimento : new Date (2000, 02, 15),  curso : {  nome: "Medicina"  },  habilidades : [{        nome: "espanhol", nivel: "intermediario" },  {      nome: "ingles",   nivel: "fluente"  }  ] })
`

- Remover dados

`db.alunos.remove({
    "_id": ObjectId("5f7e1a5431e6b23d6bc70ff1")
})`

- Filtrar dados
### OR, AND IN
### OR
db.alunos.find({    
     $or :  [{
 "curso.nome": "Medicina"
}, {
    "curso.nome": "Biologia"
}]})

### IN
db.alunos.find({    
 "curso.nome": { $in : ["Medicina", "Biologia"]} })

- Atualizar dados
### SUBSTITUI COMPLETAMENTE AS INFORMAÇÕES PELO SEGUNDO PARÂMETRO
`db.alunos.update({"curso.nome" : "Biologia"}, {"nome": "Viviane"})`

### ALTERA UM ÚNICO ELEMENTO E POR PADRÃO SÓ O PRIMEIRO QUE ENCONTRAR
`db.alunos.update({"curso.nome" : "Biologia"}, { $set : {"curso.nome": "Biologicas"}})`

### ALTERA UM ÚNICO ELEMENTO E POR PADRÃO SÓ O PRIMEIRO QUE ENCONTRAR
`db.alunos.update({"curso.nome" : "Biologia"}, { $set : {"curso.nome": "Biologicas"}}, {multi : true})`

### ADICIONA UM VALOR A UM ARRAY
`db.alunos.update({"nome": "Sofia"}, {$push : { notas: 9}})`

### ADICIONA MULTIPLOS VALORES A UM ARRAY
`db.alunos.update({"nome": "Sofia"}, {$push : { notas: { $each: [8.8, 9.9]}}})`

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

- Filtrar dados

`db.alunos.find({
    "nome" : "Viviane",
    "habilidades.nome" : "ingles"
});`

` SELECT a.* FROM habilidades as h JOIN alunos as a ON a.id = h.alunos_id WHERE h.nome = "ingles" AND a.nome = "Viviane";`

- Remoção de dados


`db.alunos.remove({
    "_id": ObjectId("5f7e1a5431e6b23d6bc70ff1")
})



# RELACIONAL X NÃO RELACIONAL


`CREATE TABLE cursos (id INTEGER PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255));`
`CREATE TABLE alunos (id INTEGER PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255), curso_id INTEGER, data_nascimento DATE);`
`CREATE TABLE notas (id INTEGER PRIMARY KEY AUTO_INCREMENT, nota DECIMAL(3,2), aluno_id INTEGER);`
`create TABLE habilidades (id INTEGER PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255), nivel VARCHAR(255), aluno_id INTEGER);`





    