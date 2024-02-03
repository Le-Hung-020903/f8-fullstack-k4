"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Provider.hasOne(models.User, {
        foreignKey: "provider_id",
      });
    }
  }
  Provider.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Provider",
      tableName: "providers",
      timestamps: false,
    }
  );
  return Provider;
};
