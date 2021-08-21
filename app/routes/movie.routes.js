module.exports = (app) => {
    const movies = require('../controllers/movie.controller.js');

    // Create a new Movie
    app.post('/movies', movies.create);

    // Retrieve all Movies
    app.get('/movies', movies.findAll);

    // Retrieve a single Movie with movieName
    app.get('/movies/:movieName', movies.findOne);

    // Update a Movie with movieName
    app.put('/movies/:id', movies.update);

    // Delete a Movie with movieName
    app.delete('/movies/:id', movies.delete);
}