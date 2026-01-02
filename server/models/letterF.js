const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const letterSchema = new Schema({
    email: {
        t
    },
    letter: String,
    delivery: String,
    audience: String,
    createdAt: String
});



/*
Schema:
email: emailInput,
    letter: letterText,
    delivery: selectedDelieveryButton,
    audience: selectedAudienceButton,
    createdAt: new Date().toISOString(),
    */