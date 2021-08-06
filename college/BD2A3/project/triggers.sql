DELIMITER $
CREATE TRIGGER tr_atualiza_status_tarefa_quando_cria_lembrete
AFTER INSERT ON lembrete_tarefa
FOR EACH ROW
BEGIN
  UPDATE tarefa
  SET tarefa.status = 'EM ANDAMENTO'
  WHERE tarefa.id = NEW.tarefa_id;
END
$

DELIMITER $
CREATE TRIGGER tr_impede_de_criar_tag_repetida
BEFORE INSERT ON tag
FOR EACH ROW
BEGIN
  IF (SELECT COUNT(*) FROM tag WHERE tag.nome = NEW.nome AND tag.cor = NEW.cor) > 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Tag repetida';
  END IF;
END
$

DELIMITER $$
CREATE TRIGGER tr_adiciona_uppercase_ao_adicionar_tag
BEFORE INSERT ON tag
FOR EACH ROW
  BEGIN
    SET NEW.nome = UPPER(NEW.nome);
  END
$$

DELIMITER $$
CREATE TRIGGER tr_muda_para_uppercase_ao_atualizar_tag
BEFORE UPDATE ON tag
FOR EACH ROW
  BEGIN
    SET NEW.nome = UPPER(NEW.nome);
  END
$$

DELIMITER $
CREATE TRIGGER tr_impede_de_criar_lembrete_repetido
BEFORE INSERT ON lembrete
FOR EACH ROW
BEGIN
  IF (SELECT COUNT(*) FROM lembrete
       WHERE lembrete.data = NEW.data
        AND lembrete.hora = NEW.hora
        AND lembrete.usuario_id = NEW.usuario_id  ) > 0
  THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Lembrete repetido';
  END IF;
END
$

DELIMITER $
CREATE TRIGGER tr_impede_de_criar_lembrete_tarefa_repetido
BEFORE INSERT ON lembrete_tarefa
FOR EACH ROW
BEGIN
  IF (SELECT COUNT(*) FROM lembrete_tarefa
       WHERE lembrete_tarefa.usuario_id = NEW.usuario_id
        AND lembrete_tarefa.tarefa_id = NEW.tarefa_id
        AND lembrete_tarefa.lembrete_id = NEW.lembrete_id  ) > 0
  THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Lembrete ja existe na tarefa';
  END IF;
END
$

DELIMITER $
CREATE TRIGGER tr_impede_de_criar_subtarefa_repetido
BEFORE INSERT ON subtarefa
FOR EACH ROW
BEGIN
  IF (SELECT COUNT(*) FROM subtarefa
       WHERE subtarefa.descricao = NEW.descricao
        AND subtarefa.usuario_id = NEW.usuario_id) > 0
  THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Subtarefa ja existe';
  END IF;
END
$
