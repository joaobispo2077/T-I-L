
SELECT nome, cpf FROM medicos WHERE idade < 40 && especialidade != 'traumatologia';

SELECT * FROM consultas WHERE hora BETWEEN '12:00' AND '18:00';

SELECT nome, idade FROM pacientes WHERE cidade != 'Florianópolis';

SELECT hora FROM consultas WHERE data_consulta NOT IN ('2006/06/14', '2006/06/20', '2006/06/19');

SELECT nome, idade * 12 as idade FROM pacientes;

SELECT cidade FROM funcionarios;

SELECT MIN(salario) as mínimo, MAX(salario) AS máximo FROM funcionarios WHERE cidade = 'Florianópolis';

SELECT MAX(hora) FROM consultas WHERE data_consulta = '2006/06/13';

SELECT avg(idade) as mediaIdadeMedicos, numero_ambulatorio FROM medicos GROUP BY idade, numero_ambulatorio;

SELECT nome, codigo_funcionario, (salario - (salario * 0.2)) AS salarioLiquido FROM funcionarios;

SELECT nome FROM funcionarios WHERE nome like '%a';

SELECT nome, cpf FROM funcionarios WHERE cpf NOT LIKE '%00000%' or '00000%';

SELECT nome, especialidade FROM medicos
WHERE nome LIKE '_o%o';

SELECT codigo_paciente, nome FROM pacientes
WHERE doenca IN ('tendinite','fratura', 'gripe', 'sarampo')
AND idade > 25;

SELECT M.nome, M.cpf FROM medicos M
LEFT JOIN pacientes P
ON M.cpf = P.cpf;

SELECT codigo_paciente, M.nome, codigo_medico, P.nome 
FROM pacientes P
INNER JOIN medicos M
ON P.cidade = M.cidade;

SELECT P.codigo_paciente, nome FROM pacientes P
LEFT JOIN consultas C
ON C.hora > '14:00'
WHERE P.codigo_paciente = C.codigo_paciente;

SELECT A.numero_ambulatorio, andar FROM ambulatorios A
LEFT JOIN  medicos M
ON M.numero_ambulatorio = A.numero_ambulatorio 
WHERE M.especialidade = "ortopedia";

SELECT nome, cpf FROM pacientes P 
LEFT JOIN consultas C
ON C.data_consulta between '2006/06/14' AND '2006/06/16';

SELECT nome, idade FROM medicos M 
LEFT JOIN consultas C
ON C.codigo_medico = M.codigo_medico
WHERE C.codigo_paciente = 1;


SELECT nome, M.codigo_medico FROM medicos M 
LEFT JOIN consultas C ON  M.codigo_medico = C.codigo_medico AND 
C.data_consulta = "2006/06/14" AND 
M.numero_ambulatorio = 2;

SELECT nome, salario FROM funcionarios 
WHERE cidade = "Florianopolis" AND salario > 1200;

SELECT * FROM ambulatorios A 
INNER JOIN medicos M ON A.numero_ambulatorio = M.numero_ambulatorio;
