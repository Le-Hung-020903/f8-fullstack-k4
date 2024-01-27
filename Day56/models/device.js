"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Device.belongsTo(models.User, {
        foreignKey: "user_id",
      });
    }
  }
  Device.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      browsers: {
        type: DataTypes.STRING,
      },
      ip: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Device",
      tableName: "devices",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Device;
};
