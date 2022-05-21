"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FieldList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FieldList.belongsTo(models.VenueFutsal, { foreignKey: "VenueId" });
      FieldList.belongsTo(models.Schedule, { foreignKey: "ScheduleId" });
    }
  }
  FieldList.init(
    {
      nameField: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Name Field cannot be null" },
          notEmpty: { msg: "Name Field cannot be empty" },
        },
      },
      VenueId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "VenueId cannot be empty",
          },
          notNull: {
            msg: "VenueId cannot be Null",
          },
        },
      },
      ScheduleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "ScheduleId cannot be empty",
          },
          notNull: {
            msg: "ScheduleId cannot be Null",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "FieldList",
    }
  );
  return FieldList;
};
