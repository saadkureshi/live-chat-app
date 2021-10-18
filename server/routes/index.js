const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.json("Backend server is up and running.");
  });
  return router;
};
