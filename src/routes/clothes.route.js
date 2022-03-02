"use strict";

const express = require("express");
const router = express.Router();
const validator = require("../middleware/validator");
const { clothesCollection } = require("../models/index");

// Routes
router.post("/clothes", createCloth);
router.get("/clothes", readAllClothes);
router.get("/clothes/:id", validator, readOneCloth);
router.put("/clothes/:id", validator, updateCloth);
router.delete("/clothes/:id", validator, deleteOneCloth);
// Handlers

async function createCloth(req, res) {
  const newCloth = req.body;
  const addedCloth = await clothesCollection.createRecord(newCloth);
  res.status(201).json(addedCloth);
}

async function readAllClothes(req, res) {
  const clothes = await clothesCollection.getRecords();
  res.status(200).json(clothes);
}

async function readOneCloth(req, res) {
  const id = +req.params.id;
  const selectedCloth = await clothesCollection.getRecords(id);
  res.status(200).json(selectedCloth);
}

async function updateCloth(req, res) {
  const id = +req.params.id;
  const newInfo = req.body;
  const updatedCloth = await clothesCollection.updateRecord(newInfo, id);
  res.status(201).json(updatedCloth);
}

async function deleteOneCloth(req, res) {
  const id = +req.params.id;
  const deletedCloth = await clothesCollection.deleteRecord(id);
  res.status(204).json(deletedCloth);
}

module.exports = router;
