const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    img: { 
        data: Buffer, 
        contentType: String 
     },
    name: String,
    img_url: String,
    summary:String

}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', MovieSchema);