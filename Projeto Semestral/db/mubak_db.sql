drop database if exists mubak_db;

create database if not exists mubak_db;

use mubak_db;

create table if not exists usuario(
	id_usuario int not null auto_increment,
    nome varchar(100) not null,
    data_nasc date not null,
    cpf varchar(11) not null,
    sexo char(1) not null,
    email VARCHAR(100) not null,
    telefone VARCHAR(13) not null,
    senha VARCHAR(32) not null,
    
    primary key(id_usuario)
);

create table if not exists forma_pagamento(
	id_forma_pagamento int not null auto_increment,
    nome varchar(100) not null,
    
    primary key(id_forma_pagamento)
);

create table if not exists compra(
	id_compra int not null auto_increment,
    data_hora datetime not null,
    valor_total double not null,
    id_forma_pagamento int not null,
    
    primary key(id_compra),
    foreign key(id_forma_pagamento) references forma_pagamento(id_forma_pagamento)
);

create table if not exists cartao_credito(
    numero_cartao varchar(16) not null,
    nome_proprietario varchar(100) not null,
    data_vencimento_mes char(2) not null,
    data_vencimento_ano char(4) not null,
    cvv char(3) not null,
	id_compra int not null,
    
    primary key(id_compra),
    foreign key(id_compra) references compra(id_compra)
);

create table if not exists produto(
	id_produto int not null auto_increment,
    nome varchar(100) not null,
    preco double not null,
    precoold double not null,
    avaliacao double not null,
    img_link varchar(100) not null,
    
    primary key(id_produto)
);

create table if not exists carrinho(
    quantidade int not null,
    id_produto int not null,
    
    primary key(id_produto),
    foreign key(id_produto) references produto(id_produto)
);

create table if not exists registro(
    id_compra int not null,
	id_produto int not null,
    quantidade int not null,
    
    primary key(id_compra, id_produto),
    foreign key(id_compra) references compra(id_compra),
    foreign key(id_produto) references produto(id_produto)
);

create table if not exists comentario(
	id_comentario int not null auto_increment,
    nome varchar(100) not null,
    cidade varchar(100) not null,
    uf char(2) not null,
	comentario tinytext not null,
    img_link varchar(100) not null,
    
    primary key(id_comentario)
);

/**/

insert into usuario values
(null, "Admin admin", '2000-01-01', "99988899900", 'o', "admin@admin.com", "5541999998888", "admin123"),
(null, "José da Silva", '1990-12-12', "11122233300", 'm', "jose@gmail.com", "5541988887777", "123456789"),
(null, "Maria Joaquina", '1995-05-05', "99988877700", 'f', "maria@outlook.com", "5542977778888", "98989898");

insert into produto values
(null, "SSD 480 GB WD Green PC SN350, PCIe, NVMe", 244.99, 423.52, 89, "img/products/1--.jpg"),
(null, "Placa-Mãe ASRock B450M Steel Legend, AMD AM4, mATX, DDR4", 849.99, 999.99, 67, "img/products/2--.jpg"),
(null, "Processador Intel Core i5-12400F, 2.5GHz (4.4GHz Max Turbo)", 1159.99, 1364.69, 56, "img/products/3--.jpg"),
(null, "Memoria, Ram 8, Gb, Xpg, D60g, 3200 Mhz, Rgb, Ddr4", 309.90, 399.99, 75, "img/products/4--.jpg"),
(null, "Fonte Gamer Corsair Cx650m, 650w, 80 Plus Bronze, Atx, Semi-modular", 531.90, 559.90, 45, "img/products/5--.jpg"),
(null, "Headset Sem Fio Gamer HyperX Cloud II Som Surround 7.1", 999.99, 1555.54, 78, "img/products/6--.jfif"),
(null, "Teclado Óptico-Mecânico Gamer Razer Huntsman Mini", 1099.90, 1294.00, 95, "img/products/7--.jfif"),
(null, "Mouse Gamer Sem Fio Logitech G PRO League Of Legends", 649.99, 888.78, 65, "img/products/8--.jfif"),
(null, "Placa de Vídeo ASRock AMD Radeon RX 6800 XT, 16GB GDDR6 ", 5099.99, 6352.93, 74, "img/products/9--.jpg"),
(null, "Cadeira Gamer Husky Gaming Storm, Preto, Com Almofadas", 999.99, 1578.84, 67, "img/products/10--.jpg"),
(null, "Gabinete Gamer Rise Mode Glass 06X", 349.90, 399.99, 89, "img/products/11--.jpg"),
(null, "Notebook Gamer Lenovo IdeaPad Gaming 3i Intel Core i5-10300H, GeForce GTX 1650", 6367.25, 6667.25, 97, "img/products/12--.jpg"),
(null, "PC Gamer Acer Predator Orion 5000", 11899.99, 15111.10, 86, "img/products/13--.jpg"),
(null, "HD Seagate 1TB BarraCuda", 249.99, 352.82, 85, "img/products/14--.jpg"),
(null, "Processador AMD Ryzen 5 5600G, 3.9GHz (4.4GHz Max Turbo)", 1786.58, 2101.86, 99, "img/products/15--.jpg"),
(null, "Monitor Gamer Samsung Odyssey G3, 24 Full HD, 144Hz, 1ms", 1399.99, 2444.43, 66, "img/products/16--.jpg");

insert into forma_pagamento values
(null, "Cartão de crédito"),
(null, "PIX");

insert into comentario values
(null, "Regina Jennifer Soares", "Maceió", "AL", "Atendimento rápido, fácil comunicação e entrega no prazo.", "img/profile_photos/pessoa1.jpg"),
(null, "Yasmin Luna Carolina Nogueira", "Belém", "PA", "Produtos de excelente qualidade e com diversificação de marcas. O feedback de acompanhamento é muito bom e a equipe é altamente treinada.", "img/profile_photos/pessoa2.webp"),
(null, "Augusto Nathan Nogueira", "Rio Verde", "GO", "Todo o processo de compra até a entrega é realizado com extrema agilidade e organização. Excelente empresa.", "img/profile_photos/pessoa3.webp"),
(null, "Cláudia Marlene Daniela Farias", "Natal", "RN", "Estou satisfeita com o atendimento e o item chegou antes do prazo. Super recomendo a empresa.", "img/profile_photos/pessoa4.jpeg"),
(null, "Enrico Benjamin da Mata", "São José do Rio Preto", "SP", "Ótimo atendimento, entrega rápida e produto funcionamento perfeitamente.", "img/profile_photos/pessoa5.jpeg");

/**/

delimiter $$
create procedure insert_produto_in_carrinho(_id_produto int, _quantidade int)
	begin
		start transaction;
		if not exists(select * from carrinho where id_produto = _id_produto) then
			insert into carrinho values (_quantidade, _id_produto);
		else
			update carrinho set
				quantidade = quantidade + _quantidade
                where id_produto = _id_produto;
        end if;
        commit;
    end $$
delimiter ;

delimiter $$
create procedure insert_compra(_id_forma_pagamento int, _numero_cartao varchar(16), _nome_proprietario varchar(100), _data_vencimento_mes char(2), _data_vencimento_ano char(4), _cvv char(3))
	begin
		declare _quantidade int default 0;
		declare _id_produto int default null;
        declare _id_compra int default null;
        
		if exists(select * from carrinho) then
			insert into compra values
			(null, now(), 0, _id_forma_pagamento);
			set _id_compra := (select last_insert_id());
            
            if _id_forma_pagamento = 1 then
				insert into cartao_credito values
				(_numero_cartao, _nome_proprietario, _data_vencimento_mes, _data_vencimento_ano, _cvv, _id_compra);
			end if;
			
			while (select count(*) from carrinho) > 0 do
                select quantidade, id_produto into _quantidade, _id_produto from carrinho order by id_produto limit 1;
                
				insert into registro values
				(_id_compra, _id_produto, _quantidade);
                
                delete from carrinho where id_produto = _id_produto;
			end while;
            
            update compra set
				valor_total = (select sum(quantidade * preco) from registro r left join produto p on r.id_produto = p.id_produto)
				where id_compra = _id_compra;
            
            select True as resposta;
            
		else
			select False as resposta;
            
		end if;
    end $$
delimiter ;
