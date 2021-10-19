// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = 5000;
const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Socket io set up
const server = require("http").createServer();
const io = require("socket.io")(server, {
  transports: ["websocket", "polling"]
});
const users = {};
io.on("connection", client => {
  client.on("username", username => {
    const user = {
      name: username,
      id: client.id
    };
    users[client.id] = user;
    io.emit("connected", user);
    io.emit("users", Object.values(users));
  });

  client.on("send", message => {
    io.emit("message", {
      text: message,
      date: new Date().toISOString(),
      user: users[client.id]
    });
  });

  client.on("disconnect", () => {
    const username = users[client.id];
    delete users[client.id];
    io.emit("disconnected", client.id);
  });
});

// Separated Routes for each Resource
const indexRoutes = require("./routes/index");
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");

// Mount all resource routes
app.use("/", indexRoutes(db));
app.use("/register", registerRoutes(db));
app.use("/login", loginRoutes(db));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// socket.io
server.listen(8000, () => console.log("Socket io server running on port 8000"));
