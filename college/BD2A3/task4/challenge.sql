
create table if not exists ambulatorios
(
	numero_ambulatorio int unsigned not null auto_increment,
    andar int unsigned not null,
    capacidade smallint unsigned not null,
    primary key(numero_ambulatorio)
)Engine=InnoDB;


INSER INTO ambulatorios (numero_ambulatorio,andar,capacidade)
VALUES
  (1, 1, 30),
  (2, 1, 50),
  (3, 2, 40),
  (4, 2, 25),
  (5, 2, 55);


INSERT INTO medicos (codigo_medico, nome, idade, especialidade, cpf, cidade, numero_ambulatorio)
VALUES 
(1, 'Joao', 40, 'ortopedia', 10000100000, 'Florianopolis', 1),
(2, 'Maria', 42, 'traumatologia', 10000110000, 'Blumenau', 2),
(3, 'Pedro', 51, 'pediatria', 11000100000, 'São José', 2),
(5, 'Marcia', 33, 'neurologia', 11000111000, 'Biguacu', 3);

INSERT INTO medicos (codigo_medico, nome, idade, especialidade, cpf, cidade)
VALUES (4, 'Carlos', 28, 'ortopedia', 11000110000, 'Joinville'),


create table if not exists consultas
(
	data_consulta date not null,
    hora time not null,
    codigo_medico int unsigned,
    codigo_paciente int unsigned,
    primary key (data_consulta, hora, codigo_medico),
    constraint fk_codigo_medico
		foreign key (codigo_medico)
        references medicos (codigo_medico)
        on update cascade
        on delete cascade,
	constraint fk_codigo_paciente
		foreign key (codigo_paciente)
		references pacientes (codigo_paciente)
        on update cascade
        on delete cascade
) Engine=InnoDB;

-- INSERÇÕES

INSERT INTO consultas (codigo_medico,codigo_paciente,data_consulta,hora)
VALUES
  (1,1, '2006/06/12', '14:00'),
  (1,4, '2006/06/13', '10:00'),
  (2,1, '2006/06/13', '09:00'),
  (2,2, '2006/06/13', '11:00'),
  (2,3, '2006/06/14', '14:00'),
  (2,4, '2006/06/14', '17:00'),
  (3,1, '2006/06/19', '18:00'),
  (3,3, '2006/06/12', '10:00'),
  (3,4, '2006/06/19', '13:00'),
  (4,4, '2006/06/20', '13:00'),
  (4,4, '2006/06/22', '19:30');


UPDATE pacientes SET cidade = 'Ilhota' WHERE ID = 2;

UPDATE consultas SET data_consulta = '04/07/2006', hora = '12:00'  WHERE codigo_medico = 1 AND codigo_paciente = 4;


UPDATE consultas SET idade = 21, doenca = 'cancer'  WHERE codigo_paciente = 1;


DELETE FROM funcionarios WHERE codigo_funcionario = 4;
-- blablabla
DELETE FROM consultas WHERE codigo_medico = 4 AND codigo_paciente = 4;

DELETE FROM pacientes WHERE doenca = 'cancer' OR idade < 10;


DELETE FROM medicos WHERE cidade = 'Biguacu' AND cidade = 'Palhoca';