const express = require('express');
const route = express.Router();
const Recomendation = require('../models/recomendationModal');

route.get('/allData', async (req, res) => {
    try{
        const allRecomendations = await Recomendation.find();
        res.json(allRecomendations)
    }catch(err){
        res.status(404).json({"error": err});
    }
    
})

route.get('/allData/:recomendationName', async (req, res) => {
    try{
        const regex = new RegExp(escapeRegex(req.params.recomendationName), 'gi')
        const searchedRecomendations = await Recomendation.find({recomendationName: regex});
        res.json(searchedRecomendations);
    }catch(Err){
        res.status(404).json({"error": Err})
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
        res.status(500).send("err");

    }

});

route.get('/:_id', async (req, res) => {

    const recomendation = await Recomendation.findById({_id: req.params._id});

    try{
        res.json(recomendation)
    } catch(err){
        res.json({"error":err})
    }
})

module.exports = route;

module.exports = route;