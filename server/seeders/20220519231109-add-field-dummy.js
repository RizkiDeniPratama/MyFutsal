"use strict";

let data = require("../field_dummy.json");
module.exports = {
  async up(queryInterface, Sequelize) {
    data = data.map((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });
    return queryInterface.bulkInsert("VenueFutsals", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("VenueFutsals", null, {});
  },
};
