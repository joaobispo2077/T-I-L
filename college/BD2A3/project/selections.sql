-- SELECIONA TODOS DADOS DA TABELA usuario

SELECT * FROM usuario;

-- SELECIONA email e apelido do usuario 3

SELECT email, apelido FROM usuario
WHERE id = 3;

-- SELECIONA email de usuarios com idade maior que 20

SELECT * FROM usuario
WHERE idade > 20;

-- SELECIONA email de usuarios com idade menor ou igual a 20

SELECT * FROM usuario
WHERE idade <= 20;

-- SELECIONA email de usuarios com idade menor ou igual a 20

SELECT * FROM usuario
WHERE idade <= 20;

-- SELECIONA todos dados de todas tarefas junto com as informações do usuário que criou a tarefa

SELECT * FROM tarefa t
INNER JOIN usuario u ON u.id = t.usuario_id;

-- SELECIONA todos os dados de todas tarefas que foram criadas pelo usuário de id 1

SELECT * FROM tarefa
WHERE usuario_id = 1;

-- SELECIONA todos os dados de todas tarefas que foram criadas pelo usuário de id 4 e com status "EM ANDAMENTO"

SELECT * FROM tarefa
WHERE usuario_id = 4
AND status = 'EM ANDAMENTO';

-- SELECIONA as subtarefas relacionadas com tarefas que o id do usuario seja 4 e que estão com a tarefa com um status de "RESOLVIDO"

SELECT * FROM subtarefa_tarefa
WHERE tarefa_id IN (SELECT id FROM tarefa WHERE usuario_id = 4 AND status = 'RESOLVIDO');

-- SELECIONA as informações da subtarefas do usuario de id 4 que estão com a tarefa com um status de "RESOLVIDO"

SELECT * FROM subtarefa
WHERE id IN
  (SELECT id FROM subtarefa_tarefa
  WHERE tarefa_id IN
   (SELECT id FROM tarefa
   WHERE usuario_id = 4 AND status = 'RESOLVIDO'));

-- SELECIONA nome e email de todos usuarios que tem tarefas com lembrete para depois do dia 1 de Agosto de 2021

SELECT nome, email FROM usuario U
LEFT JOIN tarefa t
ON t.usuario_id = u.id
LEFT JOIN lembrete_tarefa lt
ON lt.tarefa_id = t.id
LEFT JOIN lembrete l
ON l.id = lt.lembrete_id
WHERE l.data > '2021-08-01';
