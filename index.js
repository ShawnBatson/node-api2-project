const express = require("express");
const db = require("./data/db");
const expressRouter = require("./data/express-router");

const server = express();
const port = process.env.PORT || 4000;

server.use(express.json());
server.use("/posts", expressRouter);
server.use("./comments", expressRouter);

server.get("/", (req, res) => {
    res.status(200).json({
        message:
            process.env.WELCOME_MESSAGE ||
            `Welcome! The server has been started!`,
    });
});

server.listen(port, () => {
    console.log(`server runing at ${port}`);
});
