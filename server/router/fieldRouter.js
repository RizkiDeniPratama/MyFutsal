const route = require("express").Router();
const Field = require("../controller/fieldController.js");

route.get("/", Field.getField);
route.post("/", Field.addField);
route.delete("/:fieldId", Field.deleteField);
module.exports = route;
