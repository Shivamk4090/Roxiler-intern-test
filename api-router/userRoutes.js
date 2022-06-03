var express = require("express");
var router = express.Router();
const users = require("../api-controller/userController");

router.get("/:id", users.user);
module.exports = router;
