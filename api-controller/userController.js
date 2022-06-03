const axios = require("axios").default;

module.exports.user = (req, res) => {
  // res.send(`Users ${JSON.stringify(req.params)}`);

  const userURL = `https://jsonplaceholder.typicode.com/users/${req.params.id}`;

  axios
    .get(userURL)
    .then((users) => {
      const toDoURL = "https://jsonplaceholder.typicode.com/todos";

      axios
        .get(toDoURL)
        .then((todos) => {
          users.data["todos"] = [];
          todos.data.map((element) => {
            if (element.userId == req.params.id) {
              delete element.userId;
              users.data["todos"].push(element);
            }
          });

          delete users.data.username;
          delete users.data.address;
          delete users.data.website;
          delete users.data.company;

          // send final response
          res.json(users.data);
        })
        .catch((err) => {
          res.end(err.message);
          console.log(err);
        });
    })
    .catch((err) => {
      res.end(err.message);
      console.log(err);
    });
};
