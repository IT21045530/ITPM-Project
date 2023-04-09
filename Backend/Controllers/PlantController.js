const plantModel = require("../Models/PlantModel");

//insert
const plantInsert = async (req, res) => {
    const { plantID, plantName, description, price, category } = req.body;
    try {
        const plantInsertion = await plantModel.create({ plantID, plantName, description, price, category });
        res.status(200).json(plantInsertion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    plantInsert
}
