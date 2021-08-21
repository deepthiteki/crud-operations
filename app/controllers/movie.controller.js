const Movie = require('../models/movie.model.js');
const fs = require('fs')

// Create and Save a new Movie
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Movie content can not be empty"
        });
    }

    // Create a Movie
    const movie = new Movie({
        name: req.body.name,
        img_url : req.body.img,
        summary : req.body.summary,
        
        
    });

    // Save Movie in the 
    movie.img.data = fs.readFileSync(req.readFileSync.userPhoto.path)
    movie.img.contentType = 'image/png';
    movie.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Movie."
        });
    });



};

// Retrieve and return all movies from the database.
exports.findAll = (req, res) => {
    Movie.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving movies."
        });
    });
};

// Find a single movie with a movieName
exports.findOne = (req, res) => {
    Movie.findById(req.params.movieName)
    .then(movie => {
        if(!movie) {
            return res.status(404).send({
                message: "Movie not found with name " + req.params.movieName
            });            
        }
        res.send(movie);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Movie not found with this name " + req.params.movieName
            });                
        }
        return res.status(500).send({
            message: "Error retrieving movie with id " + req.params.movieName
        });
    });
};

// Update a movie identified by the movieName in the request
exports.update = (req, res) => {
    // Validate Request
    //change content to name
    console.log(req.body);
    if(!req.body.summary) {
        return res.status(400).send({
            message: "Movie content can not be empty"
        });
    }

    // Find movie and update it with the request body
    Movie.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        img : req.body.img,
        summary : req.body.summary
    }, {new: true})
    .then(movie => {
        if(!movie) {
            return res.status(404).send({
                message: "Movie not found with name1 " + req.params.movieName
            });
        }
        res.send(movie);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Movie not found with name" + req.params.movieName
            });                
        }
        return res.status(500).send({
            message: "Error updating movie with name " + req.params.movieName
        });
    });
};

// Delete a movie with the specified movieName in the request
exports.delete = (req, res) => {
    Movie.findByIdAndRemove(req.params.id)
    .then(movie => {
        if(!movie) {
            return res.status(404).send({
                message: "Movie not found with name " + req.params.id
            });
        }
        res.send({message: "Movie deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Movie not found with name " + req.params.movieName
            });                
        }
        return res.status(500).send({
            message: "Could not delete movie with name " + req.params.movieName
        });
    });
};
