import express from "express";

const app = express();
app.get("/", function(req, res) {
  res.send("Welcome to Pi Admin");
});

const server = app.listen(3000, function() {});

console.log(server);
