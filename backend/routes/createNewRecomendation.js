const express = require('express');
const route = express.Router();
const Recomendation = require('../models/recomendationModal');

app.get('/allData', async (req, res) => {
    if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search), 'gi')
        const searchedRecomendations = await Recomendation.find({recomendationName: regex});
        try{
            res.status(200).json(searchedRecomendations);
        }catch(err){
            res.send(err)
        }
    } else {
        const recomendations = await Recomendation.find();
        res.json(recomendations)
    }
    
})

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

route.post('/creation', async (req, res) => {
    const newRecomendation = new Recomendation({
        recomendationName: req.body.recomendationName,
        recomendationDescription: req.body.recomendationDescription,
        recomendationLink: req.body.recomendationLink,
        recomendationAuthor: req.body.recomendationAuthor
    })

    try{
        newRecomendation.save();
        res.status(200).send("success");

    } catch(error) {
        res.status(500).send(error);

    }

});

module.exports = route;