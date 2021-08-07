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

SELECT remove_acentuacao('CÁBEÇALHÔ');
SELECT bem_vindo();
SELECT verifica_tag_existente('SAUDE');
