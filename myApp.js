const express = require("express");
const helmet = require("helmet");
const app = express();

module.exports = app;

const api = require("./server.js");

// Reto 2
app.use(helmet.hidePoweredBy());

// Reto 3
app.use(helmet.frameguard({ action: "deny" }));

// luego de Helmet va el resto
app.use(express.static("public"));
app.disable("strict-transport-security");
app.use("/_api", api);

app.get("/", function (request, response) {
  response.sendFile(__
