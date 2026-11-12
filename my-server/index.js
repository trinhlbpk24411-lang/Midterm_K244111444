const express = require('express');
const app = express();
const port = 3002;

const morgan = require("morgan")
app.use(morgan("combined"))

const path = require("path")
const fs = require('fs');
app.use(express.static(path.join(__dirname, "public")))

const cors = require("cors")
app.use(cors())
const bodyParser = require("body-parser")
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.listen(port, () => {
    console.log(`My Server listening on port ${port}`)
})

app.get("/", (req, res) => {
    res.send("This Web server is processed for MongoDB")
})
const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("Midterm");
fashionCollection = database.collection("Midterm")


