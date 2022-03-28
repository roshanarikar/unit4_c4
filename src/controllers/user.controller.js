const express = require("express");

const client = require("../configs/redis")

const User = require("../models/user.model")

const router = express.Router();

router.post("",async (req,res) =>{
    try {
        const todo = await Todo.create(req.body);

        const todos = await Todo.find().lean().exec();
        
        client.set("todos",JSON.stringify(todos));

        return res.status(201).send(todo)

    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});


module.exports = router;