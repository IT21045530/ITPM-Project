const express = require("express");

const { plantInsert } = require("../Controllers/PlantController");

const router = express.Router();

//plant insertion
router.post("/plantInsertion", plantInsert);

module.exports = router;