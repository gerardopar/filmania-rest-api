const mongoose = require('mongoose'); // mongoDB extension
const Schema = mongoose.Schema; // mongoose schema

// * userSchema
const moviesSchema = new Schema({
    movies: [{
        movie_tmdb_id: { type: String, required: true },
        movie_poster: { type: String, required: true },
        movie_rating: { type: Number, required: false },
        movie_title: { type: String, required: true },
        createdAt: { type : Date, default: Date.now, required: true }
        }]
});

module.exports = mongoose.model('Movie', moviesSchema); // exporting the convoSchema model