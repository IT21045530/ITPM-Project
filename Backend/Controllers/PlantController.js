const plantModel = require("../Models/PlantModel");

//insert
const plantInsert = async (req, res) => {
    const {
        plantID,
        plantName,
        description,
        price,
        category
    } = req.body;

    const PlantItem = req.files.file;
    const PlantNameStore = new Date().getTime();
    await PlantItem.mv("Assets/Plants/" + `${PlantNameStore}.jpg`, (err) => {
        console.log("This is a file error " + err);
    })
    console.log("File name is " + PlantNameStore);

    try {
        const plants = new plantModel({
            plantID,
            plantName,
            description,
            price,
            category,
            plantImage: `${PlantNameStore}.jpg`
        });
        return await plants
            .save()
            .then((value) => {
                return res.status(201).json({ ID: value._id })
            }).catch((err) => {
                return res.status(500).json({ err });
            })
    } catch (error) {
        console.log("Error", error);
        res.status(400).json({ error: error.message });
    }

};

//get al plants
const getPlants = async (req, res) => {
    try {
        const plants = await plantModel.find();
        return res.status(200).json(plants);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message })
    }
}

//get selected plant view
const getPlantDetails = async (req, res) => {
    try {
        const ID = req.params.id;
        const plant = await plantModel.find({ _id: ID });

        res.status(200).send({ status: "Plant Data Received", PlantDetails: plant });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
}

module.exports = {
    plantInsert,
    getPlants,
    getPlantDetails
}
