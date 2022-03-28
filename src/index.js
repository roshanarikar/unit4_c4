const express = require("express")

const userController = require("./controllers/user.controller");

const todoController = require("./controllers/todo.controller");

const app = express();

app.use(express.json());

app.use("/user", userController);

app.use("/todo", todoController);

module.exports = app