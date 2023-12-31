"use strict";
const http = require("http");
require("dotenv").config();

const httpServer = http.createServer();
const PORT = process.env.PORT || 8000;
const router = require("./routes/todo.router");

httpServer.on("request", (req, res) => {
  router(req, res);
});

httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
