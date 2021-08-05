module.exports = (app) => {
    const movies = require('../controllers/movie.controller.js');

    // Create a new Movie
    app.post('/movies', movies.create);

    // Retrieve all Movies
    app.get('/movies', movies.findAll);

    // Retrieve a single Movie with movieName
    app.get('/movies/:movieName', movies.findOne);

    // Update a Movie with movieName
    app.put('/movies/:movieName', movies.update);

    // Delete a Movie with movieName
    app.delete('/movies/:movieName', movies.delete);
}