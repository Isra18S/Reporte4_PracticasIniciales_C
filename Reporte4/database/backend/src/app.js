const datos = require("./data/datos.json");

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json({ limit: "50mb" }));
app.use(cors());

//DB
const mysql = require("mysql2");

const connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "root",
   database: "proyecto",
});

connection.connect((error) => {
   if (error) {
      console.error("Error de conexión: " + error.stack);
      return;
   }
   console.log("Conectado a la base de datos MySQL.");
});

// ROUTES
app.get("/", (req, res) => {
   datos.forEach((curso) => {
      const sql = `INSERT INTO curso (codigo, nombre, creditos) VALUES ('${curso.codigo}', '${curso.nombre}', ${curso.creditos})`;
      connection.query(sql, (error, results) => {
         if (error) throw error;
         console.log(`Curso ${curso.name} insertado correctamente`);
      });
   });

   res.status(200).json({
      msg: "Practicas Iniciales",
   });
});

app.post("/login", (req, res) => {
   const { registro_academico, password } = req.body;
   const sql = `SELECT * FROM usuario WHERE registro_academico = ${registro_academico} AND password = '${password}'`;
   connection.query(sql, (error, results) => {
      if (error) throw error;

      if (results.length > 0) {
         res.status(200).json({
            msg: "Usuario y contraseña correctos",
            registro_academico: results[0].registro_academico,
            nombres: results[0].nombres,
            correo: results[0].correo,
            // password: results[0].password,
            apellidos: results[0].apellidos,
         });
      } else {
         res.status(401).json({
            msg: "Usuario y contraseña incorrectos",
         });
      }
   });
});

app.post("/registro", (req, res) => {
   const { registro_academico, nombres, apellidos, password, correo } =
      req.body;
   const sql = `INSERT INTO usuario (registro_academico, password, nombres, apellidos, correo) VALUES (${registro_academico}, '${password}', '${nombres}', '${apellidos}', '${correo}')`;

   connection.query(
      sql,
      [registro_academico, password, nombres, apellidos, correo],
      (error, results, fields) => {
         if (error) {
            return res.status(401).json({
               msg: "No se ha podido registrar, registro academico ya existe",
            });
         }
         res.status(200).json({
            msg: "Se ha registrado exitosamente",
         });
      }
   );
});


module.exports = app;
