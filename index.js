const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendfile(__dirname + "/pages/index.html");
});

app.listen(3000, function () {
  console.log("listening on port 3000 ....");
});
