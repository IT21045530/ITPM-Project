const express = require('express');
const Investor = require('../../Models/Resource_Managment/Model_Invester');
const router = express.Router();


// Create an investor
router.post('/addInvestor', async (req, res) => {
    try {
      const { name , telephoneNumber, capital, cultivation, address, occupation  , photo } = req.body;
      const investor = new Investor({
        name ,
        telephoneNumber,
        capital,
        cultivation,
        address,
        occupation,
        photo,
        status: 1 // set default status to 1
      });
  
      // Validate input fields
      if (!capital || !cultivation || !address || !occupation || !photo) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      await investor.save();
      res.status(201).json(investor);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});
  

// Get all investors
router.get('/getAllInvestors', async (req, res) => {
  try {
    const investors = await Investor.find();
    res.json(investors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific investor by ID
router.get('/filterInvesterUsingID/:id', async (req, res) => {
  try {
    const investor = await Investor.findById(req.params.id);
    if (!investor) {
      return res.status(404).json({ message: 'Investor not found' });
    }
    res.json(investor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Delete an investor by ID
router.delete('/investerDelete/:id', async (req, res) => {
  try {
    const investor = await Investor.findByIdAndDelete(req.params.id);
    if (!investor) {
      return res.status(404).json({ message: 'Investor not found' });
    }
    res.status(200).json({ message: 'Investor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//search investers
router.get('/investorSearch/:name', async (req, res) => {
  try {
    const name = req.params.name;

    // Use MongoDB-like function to search for investors by name
    const investors = await Investor.find({ name: { $regex: new RegExp(name, 'i') } });

    res.json(investors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred' });
  }
});

router.put('/updateInvester/:id', async (req, res) => {
  const investorId = req.params.id;
  const { capital, name, cultivation, address, telephoneNumber, occupation } = req.body;

  try {
    const updatedInvestor = await Investor.findByIdAndUpdate(
      investorId,
      { capital, name, cultivation, address, telephoneNumber, occupation },
      { new: true }
    );

    if (!updatedInvestor) {
      return res.status(404).json({ error: 'Investor not found' });
    }

    return res.status(200).json(updatedInvestor);
  } catch (error) {
    console.error('Error updating investor:', error);
    return res.status(500).json({ error: 'Failed to update investor' });
  }
});


module.exports = router;
