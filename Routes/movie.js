// * importing modules
const express = require('express'); // express framework

// * express router middleware
const router = express.Router();

// * controller
const movieController = require('../Controller/movie');

// * auth middleware
const isAuth = require('../middleware/is-auth');

router.get('/movies/similar/:movieId', movieController.getSimilarMovies);

router.get('/movies/action', movieController.getActionMovies);

router.get('/movies/adventure', movieController.getAdventureMovies);

router.get('/movies/animation', movieController.getAnimationMovies);

router.get('/movies/comedy', movieController.getComedyMovies);

router.get('/movies/documentary', movieController.getDocumentaryMovies);

router.get('/movies/drama', movieController.getDramaMovies);

router.get('/movies/fantasy', movieController.getFantasyMovies);

router.get('/movies/horror', movieController.getHorrorMovies);

router.get('/movies/scienceFiction', movieController.getScienceFictionMovies);

router.get('/movies/thriller', movieController.getThrillerMovies);

router.get('/movies/popular', movieController.getPopularMovies);

router.get('/movies/movie/search/:movieTitle', movieController.getMovieSearched);

router.get('/movies/movie/details/:movieId', movieController.getMovieDetails);

router.get('/movies/movie/cast/:movieId', movieController.getMovieCast);

router.get('/movies/favorites', isAuth, movieController.getFavoriteMovies);

router.delete('/movies/movie/:movieId', isAuth, movieController.deleteFavMovie);

router.post('/movies/movie', isAuth, movieController.postAddMovieToFavorites);

// ! exporting the router
module.exports = router;