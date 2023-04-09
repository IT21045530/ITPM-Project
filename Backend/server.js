

const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const dotenv = require('dotenv');

require("dotenv").config();

const app = express();




const port = process.env.PORT || 4000;

const URL = process.env.MONGO_URL;

app.use(cors());

app.use(express.json())




mongoose.connect(URL, {

    useNewUrlParser: true,

    useUnifiedTopology: true

})




//DB connection

const connection = mongoose.connection;

connection.once("open", () => {

    console.log("MongoDB connected");

})




app.listen(port, () => {

    console.log("PORT conneted on " + port);

})

//plant route
const plantRoute = require("./Routes/PlantRoutes");
app.use("/api/products", plantRoute);




