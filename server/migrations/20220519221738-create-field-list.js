"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("FieldLists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameField: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      VenueId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "VenueFutsals",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      ScheduleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Schedules",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("FieldLists");
  },
};
