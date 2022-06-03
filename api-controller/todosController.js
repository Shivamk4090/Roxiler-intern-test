const axios = require("axios").default;
module.exports.list = (req, res) => {
  const URL = "https://jsonplaceholder.typicode.com/todos";

  axios
    .get(URL)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.end(err.message);
      console.log(err);
    });
};
