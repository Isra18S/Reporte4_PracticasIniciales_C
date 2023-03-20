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


module.exports = app;
