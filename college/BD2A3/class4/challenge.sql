-- ALUNO: JOAO VITOR SILVA BISPO
CREATE DATABASE IFSP;

USE IFSP;

CREATE TABLE FORNECEDOR (
  idFornecedor int,
  empresa text(100),
  cnpj bigint,
  endereco text(100),
  telefone int,
  email varchar(255),
  PRIMARY KEY (idFornecedor)
);

CREATE TABLE PRODUTOS (
  idProdutos int,
  name text(100),
  quantidade int,
  idFornecedor int,
  PRIMARY KEY (idProdutos),
  FOREIGN KEY (idFornecedor) REFERENCES FORNECEDOR(idFornecedor)
);

CREATE TABLE CLIENTE (
    idCliente int,
    nome text(50),
    telefone int,
    dataDeNascimento DATE,
    cpf bigint,
    endereco text(100),
    PRIMARY KEY (idCliente)
);

CREATE TABLE VENDAS (
  idVendas int,
  idCliente int NOT NULL,
  idProdutos int NOT NULL,
  quantidade bigint NOT NULL,
  PRIMARY KEY (idVendas),
   FOREIGN KEY (idCliente) REFERENCES CLIENTE(idCliente),
   FOREIGN KEY (idProdutos) REFERENCES PRODUTOS(idProdutos)
);

CREATE USER 'usuarioTeste'@'localhost';

GRANT CREATE,DELETE,INSERT,SELECT,UPDATE ON * . * TO 'usuarioTeste'@'localhost';