const routes = require("express").Router();
const userRoute = require("./userRoute.js");
const venueRoute = require("./venueRoute.js");
const fieldRoute = require("./fieldRouter.js");

routes.get("/", (req, res) => {
  res.send({ message: "Hai, Do you miss me?" });
});

routes.use("/users", userRoute);
routes.use("/venues", venueRoute);
routes.use("/fields", fieldRoute);

module.exports = routes;
