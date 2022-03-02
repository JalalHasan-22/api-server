"use strict";

const express = require("express");
const app = new express();
const cors = require("cors");
const clothesRoutes = require("./routes/clothes.route");
const foodRoutes = require("./routes/food.route");
const logger = require("./middleware/logger");
const notFound = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");

app.use(express.json());
app.use(cors());
app.use(logger);
app.use(clothesRoutes);
app.use(foodRoutes);

app.get("/", (req, res) => {
  res.status(200).send("home route");
});

const start = (port) => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

app.use(errorHandler);
app.use("*", notFound);

module.exports = {
  app: app,
  start: start,
};
