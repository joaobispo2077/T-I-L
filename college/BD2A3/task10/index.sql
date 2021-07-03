SELECT nome, cpf FROM medicos WHERE nome IN (SELECT nome FROM pacientes);

SELECT codigo_paciente, nome FROM pacientes WHERE codigo_paciente IN (SELECT codigo_paciente FROM consultas WHERE hora > '14:00');

SELECT nome, idade FROM medicos WHERE codigo_medico IN (SELECT codigo_medico FROM consultas WHERE codigo_paciente = 1);

SELECT * FROM funcionarios ORDER BY salario desc;

SELECT nome, numero_ambulatorio FROM medicos ORDER BY numero_ambulatorio;

SELECT idade, nome FROM medicos ORDER BY idade;


SELECT (data_consulta) AS totalConsultas FROM consultas WHERE hora > '12:00' GROUP BY data_consulta HAVING COUNT(data_consulta);

SELECT numero_ambulatorio, andar 
FROM ambulatorios WHERE andar > ANY 
(SELECT andar FROM ambulatorios);

SELECT nome, idade FROM medicos
WHERE codigo_medico = ANY (SELECT codigo_medico
FROM consultas WHERE codigo_paciente = 1 );

SELECT nome, idade FROM medicos
WHERE idade < ALL (SELECT idade FROM medicos);

SELECT nome, cpf FROM pacientes
WHERE codigo_paciente = ANY (SELECT codigo_paciente
FROM consultas WHERE data_consulta < '2006-11-12' );

SELECT nome, idade FROM medicos
WHERE idade < ANY (SELECT idade FROM medicos);

SELECT nome, cpf FROM medicos
WHERE numero_ambulatorio = NOT ALL
  (SELECT numero_ambulatorio
  FROM ambulatorios
  WHERE andar = 2)


SELECT nome, cpf FROM medicos M
WHERE EXISTS (SELECT * FROM pacientes P WHERE P.cpf = M.cpf);

SELECT nome, idade FROM medicos M
WHERE EXISTS (SELECT *
  FROM consultas C
  WHERE C.codigo_paciente = 1
  AND C.codigo_medico = M.codigo_medico);

SELECT numero_ambulatorio FROM ambulatorios
WHERE numero_ambulatorio > ANY (SELECT * FROM ambulatorios);

SELECT A.numero_ambulatorio FROM ambulatorios A
WHERE EXISTS (SELECT * FROM ambulatorios AM
WHERE A.numero_ambulatorio > AM.numero_ambulatorio);

SELECT nome, cpf FROM medicos

Select * From medicos m
Where exists (Select  p.* From pacientes p
Where exists
(Select * From consultas c
Where c.codigo_medico = m.codigo_medico
and c.codigo_paciente = p.codigo_paciente));

Select nome, cpf From medicos m
Where especialidade = 'ortopedia' AND exists (Select  p.* From pacientes p
Where p.cidade = 'Florianopolis' AND exists
(Select * From consultas c
Where c.codigo_medico = m.codigo_medico
and c.codigo_paciente = p.codigo_paciente));

SELECT C.* FROM
  (SELECT * FROM consultas) as C
  WHERE C.codigo_medico = 5;

select codigo, nome from pacientes LEFT JOIN
(select * from consultas
where hora > '14:00' ) as C
on codigo_paciente = C.codigo_paciente;

select P.codigo_paciente, P.cidade
from (select

SELECT nome, cidade FROM pacientes

select nome, cidade FROM pacientes P 
join (select C.* from (select * from consultas) as C join (select
* from medicos
where especialidade = 'ortopedia') as M on
C.codigo_medico = M.codigo_medico) as C ON C.codigo_paciente = P.codigo_paciente;
