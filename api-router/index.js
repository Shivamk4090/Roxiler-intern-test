var express = require("express");
var router = express.Router();
const userRoutes = require("./userRoutes");
const todosRoutes = require("./todosRoutes");

router.use("/todos", todosRoutes);
router.use("/user", userRoutes);

// all invalid route handling
router.get("*", function (req, res) {
  res.send("Sorry, this is not a valid API endpoint.");
});

module.exports = router;
