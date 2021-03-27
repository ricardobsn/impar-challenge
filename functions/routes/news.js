const { Noticia } = require('../models/noticia');
const express = require('express');
const router = express.Router();

// app.get("/", (req, res) => res.status(200).send("hello world"));

// app.post("/news", (req, res) => {
//     const newNews = req.body
//     console.log("@@@@",newNews)
   
//     res.send(newNews);
// })

router.get('/', async (req, res) => {
  
    res.status(200).send("HELLO FCKN WORLD");
})

module.exports = router;
