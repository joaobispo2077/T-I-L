CREATE PROCEDURE remover_lembretes_da_tarefa_do_usuario(IN id_usuario INT, IN id_tarefa INT)
DELETE FROM lembrete_tarefa
WHERE usuario_id = id_usuario AND tarefa_id = id_tarefa;

CALL remover_lembretes_da_tarefa_do_usuario(1, 1);


CREATE PROCEDURE remover_tarefa_do_usuario(IN id_usuario INT, IN id_tarefa INT)
DELETE FROM tarefa
WHERE usuario_id = id_usuario AND id = id_tarefa;

CALL remover_tarefa_do_usuario(2, 1);

CREATE PROCEDURE remover_todas_tarefa_do_usuario(IN id_usuario INT)
DELETE FROM tarefa WHERE usuario_id = id_usuario;

CALL remover_todas_tarefa_do_usuario(3);
---------------------------------------------------------------------------
DELIMITER $
 CREATE FUNCTION bem_vindo() RETURNS CHAR(100) DETERMINISTIC
 BEGIN
  RETURN "Bem-vindo ao seu agendador de tarefas!";
 END
 $

DELIMITER $$
CREATE FUNCTION lista_todos_usuarios()
BEGIN
  SELECT * FROM usuario;
  RETURN
END
$$

DELIMITER ||
CREATE FUNCTION listar_tarefas_do_usuario(IN id_usuario INT, OUT tarefas)
BEGIN
  SELECT id INTO tarefas FROM tarefa WHERE usuario_id = id_usuario;
END
||


