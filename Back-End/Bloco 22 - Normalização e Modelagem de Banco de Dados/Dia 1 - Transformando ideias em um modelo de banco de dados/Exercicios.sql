-- 1) Criar um nome de BD 

CREATE DATABASE IF NOT EXISTS albuns;

-- 2) Criar tabelas
USE albuns;
-- 2.1 ) Cria as tabelas mais simples (Sem FK)
CREATE TABLE estilomusical(
	estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE Artista(
	artista_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
     -- CONSTRAINT PRIMARY KEY(artista_id)
) ENGINE=InnoDB;
-- 2.2 ) Cria as tabelas que dependem de FK
CREATE TABLE album(
	album_id INT PRIMARY KEY AUTO_INCREMENT,
    artist_id INT NOT NULL,
    estilo_id INT NOT NULL,
	FOREIGN KEY(estilo_id) REFERENCES estilomusical(estilo_id)
) ENGINE=InnoDB;

CREATE TABLE Cancao(
	cancao_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    album_id INT NOT NULL,
    FOREIGN KEY(album_id) REFERENCES album(album_id)
) ENGINE=InnoDB;


