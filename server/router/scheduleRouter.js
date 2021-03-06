const route = require("express").Router();
const schedule = require("../controller/scheduleController.js");
const { authentication } = require("../middleware/auth.js");

route.use(authentication);
route.get("/", schedule.getSchedule);
route.get("/:scheduleId", schedule.getOne);
route.post("/", schedule.addSchedule);
route.patch("/edit/:scheduleId", schedule.editSchedule);
route.delete("/delete/:scheduleId", schedule.deleteSchedule);

module.exports = route;
