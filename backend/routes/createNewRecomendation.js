const express = require('express');
const route = express.Router();
const Recomendation = require('../models/recomendationModal');

route.get('/allData', async (req, res) => {
    try{
        const allRecomendations = await Recomendation.find();
        res.json(allRecomendations);
    }catch(err){
        console.log(err)
    }
})

route.post('/creation', async (req, res) => {
    const newRecomendation = new Recomendation({
        recomendationName: req.body.recomendationName,
        recomendationDescription: req.body.recomendationDescription,
        recomendationLink: req.body.recomendationLink,
        recomendationAuthor: req.body.recomendationAuthor
    })

    try{
        newRecomendation.save();

    } catch(error) {
        res.send({error: error});
    }

});

module.exports = route;