const mongoose = require('mongoose');

const recomendationSchema = new mongoose.Schema({

    recomendationName:{
        type: String,
        required: true
    },
    recomendationDescription:{
        type: String,
        required: true
    },
    recomendationAuthor:{
        type: String,
        required: false,
        default: "dev_recomendation"
    },
    recomendationLink:{
        type: String,
        required: true
    },
    recomendationPostedAt:{
        type: Date,
        default: Date.now()
    }
    
});

module.exports = mongoose.model('Recomendations', recomendationSchema);