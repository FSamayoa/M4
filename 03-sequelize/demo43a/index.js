const express = require("express");
const {sequelize} = require("./src/db");
const server = express();

server.listen(3001, () => {
  sequelize.sync({force: true});
  console.log("El servidor esta levantado en el puerto 3001");
});

module.exports = server;
