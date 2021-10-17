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
          // req.session["userName"] = userName;
          // console.log("Just set req session userName cookie");
          // if (req.session.isNew){
          //   console.log("This is a new session");
          // } else {
          //   console.log("not a new session")
          // }
          // res.redirect("http://localhost:3000/chat");
          // res.send(response.rows);
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
