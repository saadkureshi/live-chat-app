const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {

  router.post("/", (req, res) => {

    let userName = req.body.userName;
    let password = req.body.password;

    return db.query(`
      SELECT * FROM users
      WHERE user_name = $1;
    `, [userName])
      .then(response => {
        if (response.rows[0] && bcrypt.compareSync(password, response.rows[0].password)) {
          console.log("Found a user match!");
          res.send(response.rows);
        } else {
          console.log("User not in db!")
          res.status(400).send("The username/password is incorrect.");
        }
      })
      .catch(e => {
        res.send(e);
      });
  });

  return router;
};
