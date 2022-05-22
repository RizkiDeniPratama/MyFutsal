const route = require("express").Router();
const User = require("../controller/userController.js");

route.post("/register", User.register);
route.post("/login", User.login);
route.post("/google-login", User.googleLogin);

module.exports = route;
