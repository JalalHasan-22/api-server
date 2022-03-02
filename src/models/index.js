"use strict";

require("dotenv").config();

const { Sequelize, DataTypes } = require("sequelize");
const Clothes = require("./clothes.model");
const Food = require("./food.model");
const Collection = require("./collection-class");
const POSTGRES_URI =
  process.env.NODE_ENV === "test" ? "sqlite:memory" : process.env.DATABASE_URL;

const sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

const sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

let clothesModel = Clothes(sequelize, DataTypes);
let foodModel = Food(sequelize, DataTypes);

const clothesCollection = new Collection(clothesModel);
const foodCollection = new Collection(foodModel);

module.exports = {
  db: sequelize,
  clothesCollection: clothesCollection,
  foodCollection: foodCollection,
};
