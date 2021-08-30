const {createToDo, getAllToDos, getToDo, updateToDo, deleteAllToDos, deleteToDo} = require("../controllers/todos");
const express = require("express");
const router = express.Router();

router.post("/", createToDo);

router.get("/", getAllToDos);

router.get("/:id", getToDo);

router.put("/:id", updateToDo);

router.delete("/:id", deleteToDo);

router.delete("/", deleteAllToDos);

module.exports = router;
