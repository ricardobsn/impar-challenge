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


//Routers
const newsRouter = require('./routes/news');

app.use("/news", newsRouter);


mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'impar-news', useFindAndModify: false }).then(() => {
    console.log("conexão feita com sucesso")
}).catch((err) => {
    console.log(err)
})



// Listen command
exports.api = functions.https.onRequest(app);