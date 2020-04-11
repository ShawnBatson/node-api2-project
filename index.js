const express = require("express");
const db = require("./data/db");
const expressRouter = require("./data/express-router");

const server = express();
const port = 3000;

server.use(express.json());
server.use("/posts", expressRouter);
server.use("./comments", expressRouter);

server.get("/", (req, res) => {
  res.json({
    message: "Server started successfully",
  });
});

server.listen(port, () => {
  console.log(`server runing at ${port}`);
});
