CREATE DATABASE agendador_de_tarefas;
USE agendador_de_tarefas;

CREATE TABLE IF NOT EXISTS usuario (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(15) NOT NULL,
  lastname VARCHAR(25),
  idade TINYINT UNSIGNED,
  apelido VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL
);

-- TODO: Validar formato da data e hora do usuário
CREATE TABLE IF NOT EXISTS tarefa(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(50) NOT NULL,
  descricao VARCHAR(144) NOT NULL,
  status ENUM("PENDENTE", "EM ANDAMENTO", "RESOLVIDO") DEFAULT 'PENDENTE' NOT NULL,
  tag VARCHAR(20),
  data DATE NOT NULL DEFAULT NOW(),
  hora
  usuario_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_usuario_id
		FOREIGN KEY (usuario_id)
        REFERENCES usuario(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
);

	data_consulta date not null,
    hora time not null,
    codigo_medico int unsigned,
    codigo_paciente int unsigned,
    primary key (data_consulta, hora, codigo_medico),
    constraint fk_codigo_medico
		foreign key (codigo_medico)
        references medicos (codigo_medico)
        on update cascade
        on delete cascade
)