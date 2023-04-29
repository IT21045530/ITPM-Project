const express = require("express")

const { machineInsert, getMachines, getMachineDetails } = require("../Controllers/MachineController");

const router = express.Router();

//plant insertion
router.post("/machineInsertion", machineInsert);

//get all products
router.get("/getAllMachines", getMachines);

//get selected product
router.get("/getMachines/:id", getMachineDetails)

module.exports = router;