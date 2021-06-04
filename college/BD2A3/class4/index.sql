-- CRIA UMA BASE DE DADOS
CREATE DATABASE UNIVERSITY;

-- USAR UMA BASE DE DADOS
USE UNIVERSITY;

-- CRIAR UMA TABELA INDEPENDENTE
CREATE TABLE COURSE (
  courseID int,
  courseName varchar(100),
  PRIMARY KEY (courseID)
);

-- CRIAR UMA TABELA DEPENDENTE
CREATE TABLE STUDENT (
  register int,
  studentName varchar(100),
  phone varchar(11),
  course int NOT NULL,
  PRIMARY KEY (register),
  FOREIGN KEY (course) REFERENCES COURSE(courseID) 
);

-- INSERIR UM ITEM NUMA TABELA INDEPENDENTE
INSERT INTO COURSE(courseID, courseName) 
VALUES (01, 'Biologia');

-- INSERIR ITEMS NUMA TABELA INDEPENDENTE
INSERT INTO COURSE(courseID, courseName) 
VALUES (02, 'Filosofia'),
(03, 'Matemática'),
(04, 'Futebol');


INSERT INTO STUDENT(
  register, 
  studentName,
  phone, 
  course
)
VALUES(6321321, 'Vivi', '0000000000', 01);

