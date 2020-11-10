# MongoDB
## Semelhança de conceitos
- Coleções são como Tabelas
## Vantagens e desvantagens
Uma situação onde o MongoDB é bastante usado é quando precisamos realizar buscas por proximidade, como, por exemplo, localizar a pizzaria mais próxima de você.

Situações onde o uso do MongoDB não é indicado são cenários onde precisamos fazer muitas operações de agregação em uma única query, isso tem muito custo para o MongoDB.

## QUERY NOSQL

- Criar Collection
`db.createCollection("alunos");`

- Inserir dados

```
    db.alunos.insert({ nome : "Consagrada",  
    data_nascimento : new Date (2000, 02, 15), 
    curso : {  nome: "Medicina"  },  
    habilidades : [{ nome: "espanhol", 
    nivel: "intermediario" },  
    {  nome: "ingles", nivel: "fluente" }]})
```

- Remover dados

```
db.alunos.remove({
    "_id": ObjectId("5f7e1a5431e6b23d6bc70ff1")
})
```

- Filtrar dados
### OR, AND IN

#### OR

```
db.alunos.find({    
 $or :  [
    { "curso.nome": "Medicina"}, 
    { "curso.nome": "Biologia"}
]
})
```

#### IN

```
db.alunos.find({    
 "curso.nome": { 
     $in : 
     ["Medicina", "Biologia"]
    }})
 ```

- Atualizar dados
  -  O PRIMEIRO PARÂMETRO BUSCA O ELEMENTO OU DADO, O SEGUNDO SUBSTITUI
### SUBSTITUI COMPLETAMENTE AS INFORMAÇÕES DO DOCUMENTO PELO SEGUNDO PARÂMETRO

```
    db.alunos.update(
        {"curso.nome" : "Biologia"}, 
        {"curso.nome": "Biologicas"}
    )
```

### ALTERA UM DADO DE UM ÚNICO ELEMENTO E POR PADRÃO SÓ O PRIMEIRO QUE ENCONTRAR

```
    db.alunos.update(
        {"curso.nome" : "Biologia"}, 
        { 
            $set : {"curso.nome": "Biologicas"}
        })
```

### ALTERA UM DADO DE VÁRIOS ELEMENTOS PELO SEGUNDO PARÂMETRO

```
    db.alunos.update(
        {"curso.nome" : "Biologia"}, 
        { 
            $set : {"curso.nome": "Biologicas"}
        }, 
        {multi : true}
    )
```

### ADICIONA UM VALOR A UM ARRAY

```
    db.alunos.update(
        {"nome": "Sofia"}, 
        {
            $push : { notas: 9}
        }
    )
```

### ADICIONA MULTIPLOS VALORES A UM ARRAY

```
    db.alunos.update(
        {"nome": "Sofia"}, 
        {
            $push : { 
                notas: { $each: [8.8, 9.9]}
                }
        }
    )
```

## QUERY SQL VS QUERY NOSQL

- Criar tabela X Criar coleção
<p>MongoDB</p>

```
db.createCollection("alunos")
```

</br>
<p>SQL</p>

```
CREATE TABLE alunos (id INTEGER AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), data_nascimento DATE);
```

- Inserir registro na tabela X inserir registro na coleção
  
<p>MongoDB</p>

```
db.alunos.insert({
    nome : "Consagrada",
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
```

<p>SQL</p>

```
INSERT INTO alunos VALUES (1, "Sofia", "20000215");
```


- Mostrar todos alunos

<p>MongoDB</p>

```
db.alunos.find()
```


<p>SQL</p>

```SELECT * from alunos```


- Filtrar dados com o operador AND
<p>MongoDB</p>

```
db.alunos.find({
    "nome" : "Consagrada",
    "habilidades.nome" : "ingles"
});
```

<p>SQL</p>

```
 SELECT a.* 
    FROM habilidades as h 
    JOIN alunos as a ON a.id = h.alunos_id 
    WHERE h.nome = "ingles" 
    AND a.nome = "Consagrada"
 ```

 - Filtrar dados com o operador OR
<p>MongoDB</p>

```
db.alunos.find({    
 $or :  [
    { "curso.nome": "Medicina"}, 
    { "curso.nome": "Biologia"}
]
})
```

<p>SQL</p>

```
 SELECT *
    FROM cursos 
    WHERE (nome = "Medicina"
    OR nome = "Biologia")

 ```
 - Filtrar dados com o operador IN
<p>MongoDB</p>

```
db.alunos.find({    
    "curso.nome": {
        $in: ["Medicina", "Biologia"]
    }
})
```



<p>SQL</p>

```
 SELECT *
    FROM cursos 
    WHERE nome in("Medicina", "Biologia") 

 ```


- Remoção de dados
<p>MongoDB</p>

```
db.alunos.remove({
    "_id": ObjectId("5f7e1a5431e6b23d6bc70ff1")
})
```
-  ALTERA UM DADO DE VÁRIOS ELEMENTOS PELO SEGUNDO PARÂMETRO
<p>MongoDB</p>


```
    db.alunos.update(
        {"curso.nome" : "Biologia"}, 
        { $set : 
            {"curso.nome": "Biologicas"}
        }
    )
```

<p>SQL</p>

```
    UPDATE cursos 
        SET nome = "Biologicas"
        WHERE nome = "Biologia"
```


# RELACIONAL X NÃO RELACIONAL

- Criar tabela/coleção
<p>MongoDB</p>
- Estrutura variável
  
```
db.createCollection("alunos")
```

<p>SQL</p>
- Estrutura fixa

```
CREATE TABLE cursos (id INTEGER PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255));
CREATE TABLE alunos (id INTEGER PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255), curso_id INTEGER, data_nascimento DATE);
CREATE TABLE notas (id INTEGER PRIMARY KEY AUTO_INCREMENT, nota DECIMAL(3,2), aluno_id INTEGER);
create TABLE habilidades (id INTEGER PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255), nivel VARCHAR(255), aluno_id INTEGER);
```





    