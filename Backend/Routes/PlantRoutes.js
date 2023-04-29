const express = require("express");

const { plantInsert, getPlants, getPlantDetails } = require("../Controllers/PlantController");

const router = express.Router();

//plant insertion
router.post("/plantInsertion", plantInsert);

//get all products
router.get("/getAllPlants", getPlants);

//get selected product
router.get("/getPlant/:id", getPlantDetails);

module.exports = router;