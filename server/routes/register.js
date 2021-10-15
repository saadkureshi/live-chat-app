const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let userName = req.body.userName;
    let password = req.body.password;

    console.log("firstName is: ", firstName);

    return db.query(`
      INSERT INTO users (firstName, lastName, userName, password)
      VALUES($1, $2, $3, $4)
      RETURNING *;
    `, [firstName, lastName, userName, password])
      .then(response => {
        console.log("JUST ADDED");
        res.send(response);
      })
      .catch(e => {
        console.log("ERROR")
        res.send(e);
      });
  });

  return router;
};