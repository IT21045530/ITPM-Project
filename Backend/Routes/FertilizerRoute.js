const express = require("express")

const { fertilizerInsert, getFertilizers, getFertilizerDetails, updateFertilizer, deleteFertilizer } = require("../Controllers/FertilizerController");

const router = express.Router();

//fertilizer insertion
router.post("/fertilizerInsertion", fertilizerInsert);

//get all fertilizers
router.get("/getAllFertilizers", getFertilizers);

//get selected fertilizer details
router.get("/getFertilizer/:id", getFertilizerDetails);

//delete a specific fertilizer item
router.delete("/deleteFertlizer/:id", deleteFertilizer)

//update a specific fertilizer details
router.put("/updateFertilizer", updateFertilizer)

module.exports = router;