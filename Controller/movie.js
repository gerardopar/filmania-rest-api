// * importing modules
const fetch = require('node-fetch');

// * user model
const User = require('../Models/user');

// route: GET /movies/action
exports.getActionMovies = (req, res, next) => {
    const currentPage = req.query.page || 1;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_SECRET_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=28`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            return data.json();
        })
        .then((movies) => {
            res
                .status(200)
                .send({
                    movies: movies.results,
                    totalPages: movies.total_pages
                })
        })
        .catch((err) => (console.log(err)));
};

// route: GET /movies/adventure
exports.getAdventureMovies = (req, res, next) => {
    const currentPage = req.query.page || 1;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_SECRET_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=12`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            return data.json();
        })
        .then((movies) => {
            res
                .status(200)
                .send({
                    movies: movies.results,
                    totalPages: movies.total_pages
                })
        })
        .catch((err) => (console.log(err)));
};

// route: GET /movies/animation
exports.getAnimationMovies = (req, res, next) => {
    const currentPage = req.query.page || 1;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_SECRET_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=16`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            return data.json();
        })
        .then((movies) => {
            res
                .status(200)
                .send({
                    movies: movies.results,
                    totalPages: movies.total_pages
                })
        })
        .catch((err) => (console.log(err)));
};

// route: GET /movies/comedy
exports.getComedyMovies = (req, res, next) => {
    const currentPage = req.query.page || 1; // pagination inital page
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_SECRET_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=35`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            return data.json();
        })
        .then((movies) => {
            res
                .status(200)
                .send({
                    movies: movies.results,
                    totalPages: movies.total_pages
                })
        })
        .catch((err) => (console.log(err)));
}

exports.getDocumentaryMovies = (req, res, next) => {
    const currentPage = req.query.page || 1; // pagination inital page
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_SECRET_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=99`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            return data.json();
        })
        .then((movies) => {
            res
                .status(200)
                .send({
                    movies: movies.results,
                    totalPages: movies.total_pages
                })
        })
        .catch((err) => (console.log(err)));
}

exports.getDramaMovies = (req, res, next) => {
    const currentPage = req.query.page || 1; // pagination inital page
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_SECRET_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=18`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            return data.json();
        })
        .then((movies) => {
            res
                .status(200)
                .send({
                    movies: movies.results,
                    totalPages: movies.total_pages
                })
        })
        .catch((err) => (console.log(err)));
}

exports.getFantasyMovies = (req, res, next) => {
    const currentPage = req.query.page || 1; // pagination inital page
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_SECRET_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=14`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            return data.json();
        })
        .then((movies) => {
            res
                .status(200)
                .send({
                    movies: movies.results,
                    totalPages: movies.total_pages
                })
        })
        .catch((err) => (console.log(err)));
}

exports.getHorrorMovies = (req, res, next) => {
    const currentPage = req.query.page || 1; // pagination inital page
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_SECRET_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=27`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            return data.json();
        })
        .then((movies) => {
            res
                .status(200)
                .send({
                    movies: movies.results,
                    totalPages: movies.total_pages
                })
        })
        .catch((err) => (console.log(err)));
}

exports.getScienceFictionMovies = (req, res, next) => {
    const currentPage = req.query.page || 1; // pagination inital page
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_SECRET_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=878`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            return data.json();
        })
        .then((movies) => {
            res
                .status(200)
                .send({
                    movies: movies.results,
                    totalPages: movies.total_pages
                })
        })
        .catch((err) => (console.log(err)));
}

exports.getThrillerMovies = (req, res, next) => {
    const currentPage = req.query.page || 1; // pagination inital page
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_SECRET_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=53`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            return data.json();
        })
        .then((movies) => {
            res
                .status(200)
                .send({
                    movies: movies.results,
                    totalPages: movies.total_pages
                })
        })
        .catch((err) => (console.log(err)));
}

exports.getPopularMovies = (req, res, next) => {
    const currentPage = req.query.page || 1; // pagination inital page
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_SECRET_KEY}&language=en-US&page=${currentPage}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            return data.json();
        })
        .then((movies) => {
            res
                .status(200)
                .send({
                    movies: movies.results,
                    totalPages: movies.total_pages
                })
        })
        .catch((err) => (console.log(err)));
}

// TODO: switch route POST -> GET
exports.postMovieSearched = (req, res, next) => {
    const movieTitle = req.body.movieTitle;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_SECRET_KEY}&language=en-US&query=${movieTitle}&page=1&include_adult=false`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then((movie) => {
        const movieId = movie.results[0].id;
        console.log(movieId);
        res
            .status(200)
            .json({ 
                message: `Movie searched Successfully`,
                movieId
            });
    })
    .catch(err => (err));
};

exports.getMovieDetails = (req, res, next) => {
    const movieId = req.params.movieId;
    let movie = {};

    // # fetching the movie details
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_SECRET_KEY}&language=en-US`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then((movieData) => {
        
            movie.backdrop = `https://image.tmdb.org/t/p/w1280/${movieData.backdrop_path}`;
            movie.genres = movieData.genres;
            movie.id = movieData.id;
            movie.length = movieData.runtime;
            movie.overview = movieData.overview;
            movie.poster = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
            movie.rating = movieData.vote_average;
            movie.rdate = movieData.release_date;
            movie.title = movieData.title;

        // # fetching the movie trailer
        fetch(`http://api.themoviedb.org/3/movie/${movieData.id}/videos?api_key=${process.env.API_SECRET_KEY}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(data => data.json())
        .then((trailer) => {
            movie.video = `https://www.youtube.com/embed/${trailer.results[0].key}`;
            res
            .status(200)
            .json({ 
                message: `Movie details fetched successfully`,
                movie
            });
        })
        .catch((err) => {
            console.log(err);
        });
    })
    .catch((err) => {
        console.log(err);
    });
};

exports.getSimilarMovies = (req, res, next) => {
    const movieId = req.params.movieId;
    
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.API_SECRET_KEY}&language=en-US&page=1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then((movies) => {
            console.log('similar movies', movies);
            res
            .status(200)
            .json({ 
                message: `Similar movies fetched Successfully`,
                movies: movies.results
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.postAddMovieToFavorites = (req, res, next) => {
    const movieToAdd = req.body.movieToAdd;
    const movie = {
        movie_tmdb_id: movieToAdd.movie_id,
        movie_poster: movieToAdd.movie_poster,
        movie_title: movieToAdd.movie_title,
        movie_rating: movieToAdd.movie_rating
    }

    User.findById(req.userId)
        .then((user) => {
            user.movies.push(movie);
            return user.save();
        })
        .then((result) => {
            res
            .status(200)
            .json({ 
                message: `Movie added Successfully`,
                movie
            });
        })
        .catch((err) => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.getFavoriteMovies = (req, res, next) => {

    User.findById(req.userId)
        .then((user) => {
            return user.movies;
        })
        .then((movies) => {
            console.log(movies)

            res
            .status(200)
            .json({ 
                message: `Movies fetched Successfully`,
                movies: movies
            });
        })
        .catch((err) => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

// route: DELETE /movies/removeMovie
exports.deleteFavMovie = (req, res, next) => {
    const movieId = req.body.id;
    let movies;

    User.findById(req.userId)
        .then((user) => {
            movies = user.movies.filter((movie) => (movie.id.toString() !== movieId.toString()));
            user.movies = movies;
            return user.save();
        })
        .then((result) => {
            res
            .status(201)
            .json({ // send the data to the client after saving the post to the DB
                message: 'Movie removed successfully',
                movies: result
            });
        })
        .catch((err) => { // catch any errors
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

// route: GET: /movies/movies/cast/:id 
exports.getMovieCast = (req, res, next) => {
    const movieId = req.params.movieId;
    
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_SECRET_KEY}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then((movie) => {
            const castMembers = movie.cast.slice(0, 4);
            res
            .status(200)
            .json({ 
                message: `Movie cast fetched Successfully`,
                castMembers
            });
        })
        .catch((err) => {
            console.log(err);
        });
};