const express = require("express");
const PORT = 3000;
const app = express();
const path = require("path");
const router = require("./api-router/index");

app.use("/", router);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`server is running ${PORT}`);
});

module.exports = app;
