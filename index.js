const express = require("express");
const app = express();
const router = require("./query.js");
const pool = require("./connectDB.js");

app.use(router);

pool.connect((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});
app.listen(3000);
