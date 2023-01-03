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

mongoose.connect(process.env.DATABASE_URL);

app.listen(8000)