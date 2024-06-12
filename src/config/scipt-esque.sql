-- Criar o banco de dados
create database food;
use food;

-- Criar tabela: Clientes
create table cliente (
    id_usuario int auto_increment,
    nome varchar(255),
    email varchar(100),
    logradouro varchar(100),
    numero varchar(4),
    bairro varchar(100),
    cidade varchar (100),
    uf varchar(2),
    adm bool not null default false,
    primary key (id_cliente)
);
show tables;
show columns from cliente;

-- Criar tabela: PRODUTO
create table produto (
    id_produto int auto_increment,
    nome varchar(100),
    descricao varchar (200),
    preco decimal (9,2), 
    quantidade de estoque int(S)
    ),
   primary key (id_produto) 
);
show tables; 
