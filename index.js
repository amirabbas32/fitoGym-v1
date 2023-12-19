const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendfile(__dirname + "/index.html");
});

app.get("/traineeLogin", (req, res) => {
  res.sendfile(__dirname + "/traineeLogin.html");
});

app.get("/trainerLogin", (req, res) => {
  res.sendfile(__dirname + "/trainerLogin.html");
});

app.listen(3000, function () {
  console.log("listening on port 3000 ....");
});
