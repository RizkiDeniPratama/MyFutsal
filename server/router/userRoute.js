const route = require("express").Router();
const User = require("../controller/userController.js");

route.post("/register", User.register);
route.post("/login", User.login);


module.exports = route;
