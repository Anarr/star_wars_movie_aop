var moviesJSON = require('../movies.json');

// Home Route
exports.home = function(req, res) {

	var movies = moviesJSON.movies;

	res.render('home', {
		title: "Star Wars Movies",
		movies : movies
	});
};

// Movie-single route
exports.movie_single = function(req, res) {
	var episode_number = req.params.episode_number;
	res.send("This is a page for episode " + episode_number);

};

// Route for all other page requests
exports.notFound = function(req, res) {
res.send("<h1>notFound</h1>");
};


