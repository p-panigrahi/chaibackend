require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/login", (req, res) => {
  res.send("Login in Aman Page");
});
app.get("/youtube", (req, res) => {
  res.send("<h1>Got To Chai aur Backend Youtube Series</h1>");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
