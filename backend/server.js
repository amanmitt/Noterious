const express = require("express");
const data = require("./data/testData");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db.js");
dotenv.config();
const PORT = process.env.PORT;
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working");
});

app.get("/data", (req, res) => {
  res.json(data);
});

// app.get("/data/:id", (req, res) => {
//   const d = data.find((n) => {
//     return n._id === req.params.id;
//   });
//   res.send(d);
// });

app.listen(PORT);
