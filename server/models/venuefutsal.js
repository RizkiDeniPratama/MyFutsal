"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VenueFutsal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      VenueFutsal.belongsTo(models.User, { foreignKey: "UserId" });
      VenueFutsal.hasMany(models.FieldList, { foreignKey: "VenueId" });
    }
  }
  VenueFutsal.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Name Company cannot be empty",
          },
          notNull: {
            msg: "Name Company cannot be Null",
          },
        },
      },
      field: DataTypes.INTEGER,
      address: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "your Company Address cannot be empty",
          },
          notNull: {
            msg: "your Company Address cannot be Null",
          },
        },
      },
      imageUrl: DataTypes.STRING,
      imageUrlSecond: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "VenueFutsal",
    }
  );
  return VenueFutsal;
};
