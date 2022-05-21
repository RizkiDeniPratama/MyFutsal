"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.hasMany(models.FieldList);
    }
  }
  Schedule.init(
    {
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Price cannot be empty",
          },
          notNull: {
            msg: "Price cannot be Null",
          },
        },
      },
      DateTime: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          notEmpty: {
            msg: "Date Time cannot be empty",
          },
          notNull: {
            msg: "Date Time cannot be Null",
          },
          isDate: {
            msg: "Date Time typedate Only String",
          },
        },
      },
      hour: {
        allowNull: false,
        type: DataTypes.TIME,
        validate: {
          notEmpty: {
            msg: "Hour cannot be empty",
          },
          notNull: {
            msg: "Hour cannot be Null",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
