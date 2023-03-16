CREATE DATABASE ng_publicaciones_db;

USE ng_publicaciones_db;

--ACTUALIZAR LA TABLA DE PUBLICACIONES CON 
-- DATE EN VEZ DE TIMESTAMP

CREATE TABLE publicaciones(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(180),
    tipo VARCHAR(180),
    mensaje VARCHAR(255),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE users(
    id VARCHAR(11),
    name VARCHAR(180),
    lastname VARCHAR(180),
    password VARCHAR(255),
    email VARCHAR(255)

);

CREATE TABLE comentarios(
    id VARCHAR(11),
    comentario VARCHAR(255)
);

CREATE TABLE cursosDisp (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    curso VARCHAR(255)
);

CREATE TABLE cursos (
    id VARCHAR(11),
    curso VARCHAR(255)
);

DESCRIBE publicaciones;



