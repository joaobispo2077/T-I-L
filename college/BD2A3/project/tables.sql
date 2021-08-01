CREATE DATABASE agendador_de_tarefas;
USE agendador_de_tarefas;

CREATE TABLE IF NOT EXISTS usuario (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(15) NOT NULL,
  sobrenome VARCHAR(25),
  idade TINYINT UNSIGNED,
  apelido VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tag (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(60) NOT NULL,
  cor VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS tarefa (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(50) NOT NULL,
  descricao VARCHAR(144) NOT NULL,
  status ENUM(
    "PENDENTE", "EM ANDAMENTO", "RESOLVIDO"
  ) DEFAULT 'PENDENTE' NOT NULL,
  tag_id INT UNSIGNED,
  data DATE NOT NULL,
  hora TIME NOT NULL,
  usuario_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_tag_id FOREIGN KEY (tag_id) REFERENCES tag(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS subtarefa (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(144) NOT NULL,
  usuario_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE subtarefa_tarefa (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT UNSIGNED NOT NULL,
  tarefa_id INT UNSIGNED NOT NULL,
  subtarefa_id INT UNSIGNED NOT NULL,
  concluido BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (tarefa_id) REFERENCES tarefa(id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (subtarefa_id) REFERENCES subtarefa(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE lembrete(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  data DATE NOT NULL,
  hora TIME NOT NULL,
  usuario_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE lembrete_tarefa (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT UNSIGNED NOT NULL,
  tarefa_id INT UNSIGNED NOT NULL,
  lembrete_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (tarefa_id) REFERENCES tarefa(id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (lembrete_id) REFERENCES lembrete(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- TODO: NA PARTE 2, ATUALIZAR AS IDADES

INSERT INTO tag (nome, cor)
VALUES
  ('FACULDADE', 'VERDE'),
  ('COMIDA', 'AMARELO'),
  ('ESTUDO', 'AZUL'),
  ('ESPORTE', 'ROXO'),
  ('ENTRETENIMENTO', 'LARANJA'),
  ('SAUDE', 'ROSA'),
  ('MERCADO', 'VERMELHO');

INSERT INTO usuario (
  nome, sobrenome, idade, apelido,
  email, senha
)
VALUES
  (
    'Joao', 'Bispo', 62, 'Joao', 'joao@nota10.com',
    '12345'
  ),
  (
    'Viviane', 'Queiroz', 6, 'Viviane',
    'viviane@nota10.com', '12345'
  ),
  (
    'John', 'Doe', 20, 'Jo', 'john@hotmail.com',
    '12345'
  ),
  (
    'Vivi', 'Morninstar', 23, 'Vi', 'vmorninstar@gmail.com',
    '12345'
  ),
  (
    'Sofia', 'Silva', 3, 'Soso', 'sofia@silva.com',
    '12345'
  );

INSERT INTO tarefa (
  titulo, descricao, tag_id, data, hora,
  usuario_id
)
VALUES
  (
    'Resolver atividades da faculdade',
    'Esse grupo de subtarefas tem como objetivo o fechamento das atividades da faculdade',
    1, '2021-08-10', '20:00', 1
  ),
  (
    'Experimentar comidas novas', 'Provar comidas diferentes do comum',
    2, '2021-07-16', '10:00', 1
  ),
  (
    'Estudar Programacao', 'Aperfeicoar o desenvolvimento de APIS com Node.js com foco na metodologia RESTful, arquitetura Serverless e com banco de dados mongo db',
    3, '2021-08-28', '04:00', 3
  );

INSERT INTO tarefa (
  titulo, descricao, tag_id, data, hora,
  usuario_id, status
)
VALUES
  (
    'Correr um pouco', 'Fazer uma corrida do Horto florestal ate a paulista quando a Pandemia acabar',
    4, '2022-11-05', '15:00', 3, 'EM ANDAMENTO'
  ),
  (
    'Relaxar', 'Zerar alguns jogos onde as escolhas importam apos finalizar esse semestre',
    5, '2021-08-10', '22:30', 5, 'RESOLVIDO'
  ),
  (
    'Organizar festival', 'Fazer festival de musica',
    5, '2025-11-05', '15:00', 5, 'EM ANDAMENTO'
  ),
  (
    'Agendar oftalmologista para Joao',
    'As subtarefas contem o que precisa ser pesquisado antes de agendar uma consulta',
    6, '2021-07-30', '17:30', 2, 'RESOLVIDO'
  ),
  (
    'Comprar novos talheres e pratos',
    'As subtarefas contem as caracteristicas e quantidades de cada talher e prato',
    7, '2021-08-15', '16:00', 2, 'EM ANDAMENTO'
  ),
  (
    'Inscrição na aula de box', 'Verificar nas subtarefas os preparativos necessarios para a inscricao para aulas de box',
    6, '2021-09-18', '10:00', 4, 'RESOLVIDO'
  ),
  (
    'Construir uma aplicacao utilizando firebase',
    'As subtarefas contem a ideia do projeto e os servicos que serao utilizados',
    3, '2021-08-20', '15:00', 4, 'EM ANDAMENTO'
  );

INSERT INTO subtarefa (descricao, usuario_id)
VALUES
  ('Preparar fantasias', 5),
  ('Limpar patio', 5),
  (
    'Comecar pela atividade de banco de dados que e a mais complexa e extensa',
    1
  ),
  (
    'Depois resolver as atividades de Redes que eu nao gosto muito e isso faz ser dificil ',
    1
  ),
  (
    'Coletar lots de jogo gratis para poder relaxar jogando',
    3
  ),
  (
    'Comecar por Detroit Become Human',
    3
  ),
  (
    'Pesquisar as clinicas mais proximas e preco das consultas',
    2
  ),
  ('Comprar armacao online', 2),
  (
    'Comprar 15 talheres na cor madeira',
    2
  ),
  (
    'Comprar 7 pratos na cor bege',
    2
  ),
  (
    'Comprar luvas de box e fazer inscricao no site da academia',
    4
  ),
  (
    'App de questões de vestibular',
    4
  ),
  (
    'Autenticacao e Realtime Database',
    4
  );

INSERT INTO subtarefa_tarefa (
  usuario_id, tarefa_id, subtarefa_id
)
VALUES
  (5, 6, 1),
  (5, 6, 2),
  (1, 1, 3),
  (1, 1, 4),
  (3, 5, 5),
  (3, 5, 6),
  (2, 7, 7),
  (2, 7, 8),
  (2, 8, 9),
  (2, 8, 10);

INSERT INTO subtarefa_tarefa (
  usuario_id, tarefa_id, subtarefa_id, concluido
)
VALUES
  (4, 9, 11, TRUE),
  (4, 10, 12, TRUE),
  (4, 10, 13, TRUE);

INSERT INTO lembrete (data, hora, usuario_id)
VALUES
  ('2021-07-29', '08:30', 2),
  ('2021-07-14', '12:00', 2),
  ('2021-09-17', '16:00', 4),
  ('2021-10-20', '10:20', 5),
  ('2021-09-02', '04:20', 1),
  ('2021-08-15', '09:00', 1),
  ('2021-12-03', '19:00', 3);

INSERT INTO lembrete_tarefa (
  usuario_id, tarefa_id, lembrete_id
)
VALUES
  (5, 6, 4),
  (1, 1, 5),
  (1, 1, 6),
  (3, 5, 7),
  (2, 7, 1),
  (2, 8, 2),
  (2, 9, 3);
