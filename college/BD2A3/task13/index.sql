
-- view
CREATE VIEW tarefas_com_subtarefa AS
SELECT st.* FROM subtarefa_tarefa st
RIGHT JOIN tarefa t ON st.tarefa_id = t.id;


SELECT * FROM tarefas_com_subtarefa;

-- trigger
DROP TRIGGER IF EXISTS `agendador_de_tarefas`.`usuario_AFTER_DELETE`;

DELIMITER $$
USE `agendador_de_tarefas`$$
CREATE DEFINER = CURRENT_USER TRIGGER `agendador_de_tarefas`.`usuario_AFTER_DELETE` AFTER DELETE ON `usuario` FOR EACH ROW
BEGIN
    DELETE FROM tarefa WHERE usuario_id = OLD.id;
    DELETE FROM subtarefa_tarefa WHERE usuario_id = OLD.id;
    DELETE FROM lembrete_tarefa WHERE usuario_id = OLD.id;
END$$
DELIMITER ;