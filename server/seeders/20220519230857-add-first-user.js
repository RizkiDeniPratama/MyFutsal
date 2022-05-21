"use strict";

const { hash } = require("../helpers/bcrypt.js");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Rizki",
          email: "owner@mail.com",
          password: hash("qweqwe"),
          role: "admin",
          phoneNumber: "085205494327",
          address: "kerato, Sumbawa Besar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
