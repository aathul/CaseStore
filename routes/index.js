var express = require("express");
var router = express.Router();
const { Controller } = require("../src/controller/controller");
const controller = new Controller();

// Login
router.post("/", async (req, res, next) => {
  let userName = req.body.userName;
  let password = req.body.password;
  let response;
  let authentication = controller.authentication(userName, password);
  if (authentication) {
    response = {
      status: 200,
      message: "successfully login",
    };
  } else {
    response = {
      status: 500,
      message: "Invalid username or password",
    };
  }
  res.json(response);
});

//Registration
router.post("/register", async (req, res, next) => {
  let registration = controller.registration(req.body);
  let response;
  if (registration) {
    response = {
      status: 200,
      message: "successfully registered",
    };
  } else {
    response = {
      status: 500,
      message: "Registration failed",
    };
  }
  res.json(response);
});

module.exports = router;
