const express = require('express');
const Land = require('../Routes/Route_land');
const router = express.Router();


// Create a new land record
router.post('/addLand', async (req, res) => {
    try {
      const land = new Land({
        perches: req.body.purches,
        soilNature: req.body.soilNature,
        address: req.body.address,
        district: req.body.district,
        cultivationGood: req.body.cultivationGood,
        landType: req.body.landType,
        minInvestment: req.body.minInvestment,
        photo: req.body.photo,
      });
  
      await land.save();
      res.status(201).send(land);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
});

// Read all land records
router.get('/getAllLands', async (req, res) => {
  try {
    const lands = await Land.find();
    res.send(lands);
  } catch (error) {
    res.status(500).send(error);
  }
});

// // Read a single land record by ID
router.get('/getOneLand/:id', async (req, res) => {
  try {
    const land = await Land.findById(req.params.id);
    if (!land) {
      return res.status(404).send();
    }
    res.send(land);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a land record by ID
router.delete('/landDelete/:id', async (req, res) => {
  try {
    const land = await Land.findByIdAndDelete(req.params.id);
    if (!land) {
      return res.status(200).send();
    }
    res.send(land);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
