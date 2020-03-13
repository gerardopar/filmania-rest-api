// * importing modules
const express = require('express'); // express framework

// * express router middleware
const router = express.Router();

// * controller
const movieController = require('../Controller/movie');

// * auth middleware
const isAuth = require('../middleware/is-auth');

router.post('/movies/addToFav', isAuth, movieController.postAddMovieToFavorites);

router.post('/movies/postMovieSearched', movieController.postMovieSearched);

router.post('/movies/movie/details', movieController.postMovieDetails);

router.post('/movies/similar', movieController.postSimilarMovies);

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

router.get('/movies/favorites', isAuth, movieController.getFavoriteMovies);

router.delete('/movies/deleteFav', isAuth, movieController.deleteFavMovie);


// ! exporting the router
module.exports = router;