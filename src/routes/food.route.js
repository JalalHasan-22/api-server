"use strict";

const express = require("express");
const router = express.Router();
const { foodCollection } = require("../models/index");
// Routes

router.post("/food", createFood);
router.get("/food", getAllFood);
router.get("/food/:id", getOneFood);
router.put("/food/:id", updateFood);
router.delete("/food/:id", deleteFood);

// Handlers

async function getAllFood(req, res) {
  const food = await foodCollection.getRecords();
  res.status(200).json(food);
}

async function getOneFood(req, res) {
  const id = +req.params.id;
  const selectedFood = await foodCollection.getRecords(id);
  res.status(200).json(selectedFood);
}

async function createFood(req, res) {
  const newFood = req.body;
  const addedFood = await foodCollection.createRecord(newFood);
  res.status(201).json(addedFood);
}

async function updateFood(req, res) {
  const id = +req.params.id;
  const newInfo = req.body;
  const updatedFood = await foodCollection.updateRecord(newInfo, id);
  res.status(201).json(updatedFood);
}

async function deleteFood(req, res) {
  const id = +req.params.id;
  const deletedFood = await foodCollection.deleteRecord(id);
  res.status(204).send(`${deletedFood} record was deleted from the database`);
}

module.exports = router;
