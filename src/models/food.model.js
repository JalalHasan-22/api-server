"use strict";

const Food = (sequelize, DataTypes) =>
  sequelize.define("food", {
    foodName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    catagory: {
      type: DataTypes.STRING,
    },
  });

module.exports = Food;
