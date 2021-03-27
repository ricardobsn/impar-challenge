const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv/config");


// API

// App config

const app = express();

app.use(cors());
app.options('*', cors());

// Middlewares
app.use(bodyParser.json());
app.use(morgan('tiny'));

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/news", (req, res) => {
    const newNews = req.body
    console.log("@@@@",newNews)
   
    res.send(newNews);
})

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'impar-news', useFindAndModify: false }).then(() => {
    console.log("conexão feita com sucesso")
}).catch((err) => {
    console.log(err)
})



// Listen command
exports.api = functions.https.onRequest(app);