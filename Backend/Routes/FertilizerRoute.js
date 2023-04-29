const express = require("express")

const { fertilizerInsert, getFertilizers, getFertilizerDetails } = require("../Controllers/FertilizerController");

const router = express.Router();

//fertilizer insertion
router.post("/fertilizerInsertion", fertilizerInsert);

//get all fertilizers
router.get("/getAllFertilizers", getFertilizers);

//get selected fertilizer details
router.get("/getFertilizer/:id", getFertilizerDetails);

module.exports = router;
