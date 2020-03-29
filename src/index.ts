import express from "express";
import gpio from "rpi-gpio";

const pin = 23;

const app = express();
app.get("/", function(req, res) {
  res.send("Welcome to Pi Admin");
});
app.post("/on", (req, res) => {
  var gpiop = require("rpi-gpio").promise;

  gpiop
    .setup(pin, gpiop.DIR_OUT)
    .then(() => {
      return gpiop.write(pin, true);
    })
    .catch((err: any) => {
      console.log("Error: ", err.toString());
    })
    .then(() => {
      res.send("OK");
    });
});
app.post("/off", (req, res) => {
  var gpiop = require("rpi-gpio").promise;

  gpiop
    .setup(pin, gpiop.DIR_OUT)
    .then(() => {
      return gpiop.write(pin, false);
    })
    .catch((err: any) => {
      console.log("Error: ", err.toString());
    })
    .then(() => {
      res.send("OK");
    });
});

const server = app.listen(3000, function() {});

console.log(server);
