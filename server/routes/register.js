const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
    let hashedPassword = bcrypt.hashSync(password, saltRounds);

    return db.query(`
      INSERT INTO users (first_name, last_name, user_name, password)
      VALUES($1, $2, $3, $4)
      RETURNING *;
    `, [firstName, lastName, userName, hashedPassword])
      .then(response => {
        console.log("JUST ADDED");
        res.send(response);
      })
      .catch(e => {
        console.log("ERROR");
        console.log(e);
        res.send(e);
      });
  });

  return router;

};