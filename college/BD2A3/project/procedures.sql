DELIMITER //
CREATE PROCEDURE pr_remove_tag_pelo_id(
  IN tag_id INT
)
BEGIN
  DELETE FROM tag
  WHERE tag.id = tag_id;
END
//

DELIMITER //
CREATE PROCEDURE pr_criar_tag(
  IN nome_tag VARCHAR(60),
  IN cor_tag VARCHAR(20)
)
BEGIN
  INSERT INTO tag(nome, cor)
  VALUES (nome_tag, cor_tag);
END
//

DELIMITER //
CREATE PROCEDURE pr_atualiza_status_tarefa(
  IN id_tarefa INT,
  IN id_usuario INT,
  IN status VARCHAR(20)
)
BEGIN
  UPDATE tarefa
  SET tarefa.status = status
  WHERE tarefa.id = id_tarefa AND tarefa.usuario_id = id_usuario;
END
//

DELIMITER $
CREATE PROCEDURE pr_remover_lembretes_da_tarefa_do_usuario(IN id_usuario INT, IN id_tarefa INT)
BEGIN
 DELETE FROM lembrete_tarefa
 WHERE lembrete_tarefa.usuario_id = id_usuario AND lembrete_tarefa.tarefa_id = id_tarefa;
END
$


DELIMITER $$
CREATE PROCEDURE pr_remover_lembretes_de_tarefas_com_status(
  IN status VARCHAR(20)
)
BEGIN
 DELETE lembrete_tarefa FROM lembrete_tarefa
 WHERE lembrete_tarefa.id IN (SELECT tarefa.id FROM tarefa WHERE tarefa.status = status);
END
$$


DELIMITER $$
CREATE PROCEDURE pr_remover_lembretes_de_tarefas_com_status(
  IN status VARCHAR(20)
)
BEGIN
 DELETE lembrete_tarefa FROM lembrete_tarefa
 WHERE lembrete_tarefa.id IN (SELECT tarefa.id FROM tarefa WHERE tarefa.status = status);
END
$$

DELIMITER ||
CREATE PROCEDURE pr_aumenta_idade_do_usuario_pelo_id(
  IN id INT
)
BEGIN
  UPDATE usuario
  SET usuario.idade = usuario.idade + 1
  WHERE usuario.id = id;
END
||

CALL pr_criar_tag("PARQUE", "VERDE");
CALL pr_remove_tag_pelo_id(8);
CALL pr_atualiza_status_tarefa(1, 1, "RESOLVIDO");
CALL pr_remover_lembretes_da_tarefa_do_usuario(1, 1);
CALL pr_remover_lembretes_de_tarefas_com_status('RESOLVIDO');
CALL pr_aumenta_idade_do_usuario_pelo_id(2);
