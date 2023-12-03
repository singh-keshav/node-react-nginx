const { Router } = require("express");

const routes = new Router();

routes.get("/ping", (req, res, next) => {
  res.send("pong");
});

module.exports = routes;