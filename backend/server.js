const express = require("express");
const data = require("./data/testData");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Working");
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.get("/data/:id", (req, res) => {
  const d = data.find((n) => {
    return n._id === req.params.id;
  });
  res.send(d);
});
app.listen(PORT);
