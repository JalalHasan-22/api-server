"use strict";

const express = require("express");
const { start, app } = require("./src/server");
const { db } = require("./src/models/index");

require("dotenv").config();

db.sync().then(() => {
  start(process.env.PORT || 3001);
});
