const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (db) => {

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
        res.send(response);
      })
      .catch(e => {
        res.send(e);
      });
  });

  return router;

};