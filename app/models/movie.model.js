const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    name: String,
    img: String,
    summary:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', MovieSchema);