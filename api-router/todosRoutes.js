var express = require("express");
var router = express.Router();
const todos = require("../api-controller/todosController");

// return list of all todos
router.get("/", todos.list);
module.exports = router;
