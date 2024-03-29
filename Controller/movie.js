// * importing modules
const fetch = require('node-fetch');

// * user model
const User = require('../Models/user');
const Movie = require('../Models/movies');

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

exports.getMovieSearched = (req, res, next) => {
    // const movieTitle = req.body.movieTitle;
    const movieTitle = req.params.movieTitle;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_SECRET_KEY}&language=en-US&query=${movieTitle}&page=1&include_adult=false`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then((movie) => {
        const movieId = movie.results[0].id;
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
    let data = {};

    // # fetching the movie details
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_SECRET_KEY}&language=en-US&append_to_response=watch/providers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then((movieData) => {
            console.log('movie data', movieData);
        
            movie.backdrop = `https://image.tmdb.org/t/p/w1280/${movieData.backdrop_path}`;
            movie.genres = movieData.genres;
            movie.id = movieData.id;
            movie.length = movieData.runtime;
            movie.overview = movieData.overview;
            movie.poster = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
            movie.rating = movieData.vote_average;
            movie.rdate = movieData.release_date;
            movie.title = movieData.title;
            
            data = {...movieData};

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
            data = {
                    ...data, 
                    trailer: `https://www.youtube.com/embed/${trailer.results[0].key}`, 
                    videoId: trailer.results[0].key
                };
            res
            .status(200)
            .json({ 
                message: `Movie details fetched successfully`,
                movie,
                data
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
    const movieObj = {
        movie_tmdb_id: movieToAdd.movie_id,
        movie_poster: movieToAdd.movie_poster,
        movie_title: movieToAdd.movie_title,
        movie_rating: movieToAdd.movie_rating
    }

    User.findById(req.userId)
        .then((user) => {

            if(user.movies !== undefined) {
                Movie.findById(user.movies).then((moviesFound) => {
                    moviesFound.movies.push(movieObj);
                    moviesFound.save();
                })
                .catch((err) => {
                    if(!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                });
            } else {
                const movie = new Movie({
                    movies: [movieObj]
                });
                movie.save()
                user.movies = movie._id;
                return user.save();
            }

            return user;
        })
        .then((result) => {
            res
            .status(200)
            .json({ 
                message: `Movie added Successfully`,
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
            Movie.findById(user.movies)
            .then((moviesFound) => {
                res
                .status(200)
                .json({ 
                    message: `Movies fetched Successfully`,
                    movies: moviesFound.movies
                });
            }).catch((err) => {
                console.log(err)
            });
        })
        .catch((err) => {
            console.log(err);
        })
}

// route: DELETE /movies/removeMovie
exports.deleteFavMovie = (req, res, next) => {
    const movieId = req.params.movieId;
    const userId = req.userId

    User.findById(userId)
        .then((user) => {
            Movie.findById(user.movies)
            .then((moviesFound) => {
                let movies = moviesFound.movies;
                moviesFound.movies = movies.filter((movie) => movie._id.toString() !== movieId.toString());
                moviesFound.save();
                res
                .status(200)
                .json({ 
                    message: `Movies fetched Successfully`,
                    movies: moviesFound.movies
                });
            }).catch((err) => {
                console.log(err)
            });
        })
        .catch((err) => {
            console.log(err);
        })
    
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
            const castMembers = movie.cast;
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