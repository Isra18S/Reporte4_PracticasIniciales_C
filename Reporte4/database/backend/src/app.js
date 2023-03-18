const datos = require("./data/datos.json");

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json({ limit: "50mb" }));
app.use(cors());



module.exports = app;
