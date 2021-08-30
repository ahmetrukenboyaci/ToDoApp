const ToDo = require("../models/todo");

async function createToDo(req, res) {
    try {
        const body = {
            description: req.body.description,
            done: false
        }
        await new ToDo(body).save();
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
        res.status(201).json('Successfully added!');
    } catch (error) {
        res.status(400).json(error);
    }
}

async function getToDo(req, res) {
    try {
        const todo = await ToDo.findById(req.params.id);
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
        if (!todo) res.status(404).json('todo is not found');
        else res.status(200).json(todo);
    } catch (error) {
        res.status(400).json(error);
    }
}

async function getAllToDos(req, res) {
    try {
        const todos = await ToDo.find();
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
        res.status(200).json(todos);
    } catch (error) {
        res.status(400).json(error);
    }
}

async function updateToDo(req, res) {
    try {
        await ToDo.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
        res.status(200).json('Successfully updated!');
    } catch (error) {
        res.status(400).json(error);
    }
}

async function deleteToDo(req, res) {
    try {
        await ToDo.findByIdAndDelete(req.params.id);
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
        res.status(200).json('Successfully removed!');
    } catch (error) {
        res.status(400).json(error);
    }
}

async function deleteAllToDos(req, res) {
    try {
        await ToDo.deleteMany();
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
        res.status(200).json('Successfully removed!');
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {createToDo, getAllToDos, getToDo, updateToDo, deleteAllToDos, deleteToDo};