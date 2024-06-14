show databases;

create database chocolate;
use chocolate;

-- Tabela Usuario
create table usuario (
	id_usuario int auto_increment,
	nome varchar(100),
	email varchar(100),
	senha varchar(100),
	adm bool not null default false,
	primary key (id_usuario)
);

show tables;
show columns from usuario;

-- Tabela Produtos
create table produto ( 
	id_produto int auto_increment,
	nome varchar(100),
	descricao varchar(200),
	preco decimal(9,2),
	foto varchar(1000),
	primary key (id_produto)
);

show tables;
show columns from produto;

-- Tabela Pedidos
create table pedido (
	id_pedido int auto_increment,
    id_usuario int,
    nome varchar(100),
    email varchar(100),
    fone varchar(50),
    end_logradouro varchar(200),
    end_numero varchar(10),
    end_bairro varchar(100),
    end_cidade varchar(50),
    end_uf char (2),
    end_cep char(8),
    total decimal(9,2),
    primary key (id_pedido),
    foreign key (id_usuario) references usuario (id_usuario)
    );
    
show tables;
show columns from pedido;

-- Tabela Pedido_item
create table pedido_item (
	id_item int auto_increment,
    id_pedido int,
    id_produto int,
    quantidade decimal(9,2),
    valor_unitario decimal(9,2),
    primary key (id_item),
    foreign key (id_pedido) references pedido (id_pedido),
    foreign key (id_produto) references produto(id_produto)
    );
    
show tables;
show columns from pedido_item;

-- Admin
insert into usuario values(
	null, 'Administrador', 'adm@adm.com.br', 'adm', true);
    
-- Produtos
insert into produto (nome, descricao, preco) values(
	'Paraíso Clássico', 'Chocolate ao leite', 10.00);
    
insert into produto (nome, descricao, preco) values(
	'Paraíso Gourmet', 'Trufas de chocolate ao leite e de chocolate branco', 12.00);
    
insert into produto (nome, descricao, preco) values(
	'Caramelo do Paraíso', 'Chocolate ao leite com caramelo', 14.90);

insert into produto (nome, descricao, preco) values(
	'Celestial', 'Chocolate branco com coco', 24.90);
    
insert into produto (nome, descricao, preco) values(
	'Amêndoa Celestial', 'Chocolate ao leite com amêndoas', 12.00);
    
insert into produto (nome, descricao, preco) values(
	'Magia Celestial', 'Chocolate ao leite com recheio de morango', 14.90);
    
    
/*
	SELECT
*/
select * from usuario;
select * from produto;
select * from pedido;
select * from pedido_item;

-- Excluir database
drop database chocolate;