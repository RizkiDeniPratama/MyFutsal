const route = require("express").Router();
const Venue = require("../controller/venueController.js");
const { authentication } = require("../middleware/auth.js");

route.use(authentication);
route.get("/", Venue.getAll);
// route.post("/", User.login);

module.exports = route;
