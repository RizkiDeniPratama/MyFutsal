const route = require("express").Router();
const Venue = require("../controller/venueController.js");

route.get("/", Venue.getAll);
// route.post("/", User.login);

module.exports = route;
