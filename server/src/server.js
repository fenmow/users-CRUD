require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_URL = process.env.NODE_APIURL;
app.listen(PORT, console.log(`Servidor iniciado em ${API_URL + PORT}`));
