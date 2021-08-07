CREATE VIEW todas_tags AS
SELECT id, nome, cor
FROM tag;

CREATE VIEW tarefas_com_subtarefa AS
SELECT st.* FROM subtarefa_tarefa st
RIGHT JOIN tarefa t ON st.tarefa_id = t.id;
SELECT * FROM tarefas_com_subtarefa;

CREATE VIEW tarefas_pendentes AS
SELECT titulo
FROM tarefa
WHERE status = 'PENDENTE';

CREATE VIEW tarefas_em_andamento AS
SELECT titulo
FROM tarefa
WHERE status = 'EM ANDAMENTO';

CREATE VIEW tarefas_resolvidas AS
SELECT titulo
FROM tarefa
WHERE status = 'RESOLVIDO';

CREATE VIEW maiores_de_idade AS
SELECT nome
FROM usuario
WHERE idade > 18;

CREATE VIEW menores_de_idade AS
SELECT nome
FROM usuario
WHERE idade < 18;

--  TESTES DE VIEWS
-- SELECT * FROM todas_tags;
-- SELECT * FROM tarefas_com_subtarefa;
-- SELECT * FROM tarefas_pendentes;
-- SELECT * FROM tarefas_em_andamento;
-- SELECT * FROM tarefas_resolvidas;
-- SELECT * FROM maiores_de_idade;
-- SELECT * FROM menores_de_idade;


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

--   TESTES DE PROCEDURES
-- CALL pr_criar_tag("PARQUE", "VERDE");
-- CALL pr_remove_tag_pelo_id(8);
-- CALL pr_atualiza_status_tarefa(1, 1, "RESOLVIDO");
-- CALL pr_remover_lembretes_da_tarefa_do_usuario(1, 1);
-- CALL pr_remover_lembretes_de_tarefas_com_status('RESOLVIDO');
-- CALL pr_aumenta_idade_do_usuario_pelo_id(2);

DELIMITER $$
CREATE FUNCTION remove_acentuacao(texto char(144))
RETURNS CHAR(144) DETERMINISTIC
BEGIN
    SET
        texto = replace(texto, 'á', 'a'),
        texto = replace(texto, 'é', 'e'),
        texto = replace(texto, 'í', 'i'),
        texto = replace(texto, 'ó', 'o'),
        texto = replace(texto, 'ú', 'u'),
        texto = replace(texto, 'à', 'a'),
        texto = replace(texto, 'ã', 'a'),
        texto = replace(texto, 'â', 'a'),
        texto = replace(texto, 'õ', 'o'),
        texto = replace(texto, 'ô', 'o'),
        texto = replace(texto, 'ê', 'e'),
        texto = replace(texto, 'Á', 'A'),
        texto = replace(texto, 'É', 'E'),
        texto = replace(texto, 'Í', 'I'),
        texto = replace(texto, 'Ó', 'O'),
        texto = replace(texto, 'Ú', 'U'),
        texto = replace(texto, 'Ã', 'A'),
        texto = replace(texto, 'À', 'A'),
        texto = replace(texto, 'Â', 'A'),
        texto = replace(texto, 'Õ', 'O'),
        texto = replace(texto, 'Õ', 'O'),
        texto = replace(texto, 'Ô', 'O'),
        texto = replace(texto, 'Ê', 'E'),
        texto = replace(texto, 'ç', 'c'),
        texto = replace(texto, 'Ç', 'C');
    RETURN texto;
END;
$$


DELIMITER $$
 CREATE FUNCTION bem_vindo()
 RETURNS VARCHAR(100) DETERMINISTIC
 BEGIN
    RETURN "Bem-vindo ao seu agendador de tarefas!";
 END
 $$


DELIMITER $$
CREATE FUNCTION verifica_tag_existente(nome_tag VARCHAR(144))
RETURNS VARCHAR(144) DETERMINISTIC
BEGIN
    DECLARE mensagem_tag_existente VARCHAR(144);
    IF nome_tag IN (SELECT nome FROM tag)

    THEN SET mensagem_tag_existente = "Essa tag já foi cadastrada no sistema";
    END IF;

    SET mensagem_tag_existente = CONCAT(nome_tag, ' : ', mensagem_tag_existente);

    RETURN mensagem_tag_existente;
END
$$

--  TESTES DE FUNCTIONS
-- SELECT remove_acentuacao('CÁBEÇALHÔ');
-- SELECT bem_vindo();
-- SELECT verifica_tag_existente('SAUDE');

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

-- TESTES DE TRIGGERS
-- tr_impede_de_criar_subtarefa_repetido
-- INSERT INTO subtarefa
--  (descricao, usuario_id)
-- VALUES
--   ('Preparar fantasias', 5);

-- tr_impede_de_criar_lembrete_tarefa_repetido
-- INSERT INTO lembrete_tarefa (
--   usuario_id, tarefa_id, lembrete_id
-- )
-- VALUES
--   (2, 8, 2);

-- tr_impede_de_criar_lembrete_repetido
-- INSERT INTO lembrete (data, hora, usuario_id)
-- VALUES
--   ('2021-07-29', '08:30', 2);

-- tr_muda_para_uppercase_ao_atualizar_tag
-- UPDATE tag
-- SET tag.nome = 'entreterimento'
-- WHERE tag.id = 5;

-- tr_adiciona_uppercase_ao_adicionar_tag
-- INSERT INTO tag ( nome, cor )
-- VALUES ( 'inglês', 'ROSA CHOQUE' );

-- tr_impede_de_criar_tag_repetida
-- INSERT INTO tag ( nome, cor )
-- VALUES ( 'INGLÊS', 'ROSA CHOQUE' );
