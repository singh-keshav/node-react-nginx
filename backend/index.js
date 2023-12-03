const express = require("express");
const routes = require("./routes");

const app = express();
app.listen(process.env.port, () => console.log("started listening on port", process.env.port));


app.get("/api/v1/ping", (req, res) => res.send("pong"));

app.use(routes);
