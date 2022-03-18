const mongoose = require('mongoose');

const articlesSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
},
);

module.exports = mongoose.model("Articles",articlesSchema)