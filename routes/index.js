const express = require("express");
const router = express.Router();
const Api = require("../controller");

router.get("/gettasklist",Api.getTodoList);
router.post("/addtask", Api.createTodo);
router.patch("/edittask/:id",Api.editTodo);
router.delete("/droptask/:id",Api.deleteTodo)

module.exports = router;