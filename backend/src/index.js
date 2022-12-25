const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const recomendations = require('../routes/createNewRecomendation');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
    res.setHeader( "Access-Control-Allow-Headers", "Content-Type",)
    next();
  });


app.use('/recomendations', recomendations);

app.use(cors());

mongoose.connect('mongodb+srv://felipegadelha:oJM5ENPio0I4iTVR@cluster0.kev4g.mongodb.net/dev_recomendation?retryWrites=true&w=majority');

app.listen(process.env.PORT || 8000, () => console.log(`the server is running at ${process.env.PORT}`))