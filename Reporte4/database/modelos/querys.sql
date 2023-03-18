use proyecto;

CREATE TABLE usuario (
    registro_academico INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    PRIMARY KEY(registro_academico)
);

CREATE TABLE curso (
    codigo INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    creditos INT NOT NULL,
    PRIMARY KEY(codigo)
);

CREATE TABLE aprobados (
    registro_academico INT NOT NULL,
    codigo INT NOT NULL,
    FOREIGN KEY ( codigo ) REFERENCES curso ( codigo ),
    FOREIGN KEY ( registro_academico ) REFERENCES usuario ( registro_academico )
);
