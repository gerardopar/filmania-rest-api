const mongoose = require('mongoose'); // mongoDB extension
const Schema = mongoose.Schema; // mongoose schema

// * userSchema
const userSchema = new Schema({
    email: { // user__email
        type: String,
        required: true
    },
    password: { // user__password
        type: String,
        required: true
    },
    // movies: [ // user_movies
    //     {
    //         movieId: { type: Schema.Types.ObjectId },
    //         movie_tmdb_id: { type: String, required: true },
    //         movie_poster: { type: String, required: true },
    //         movie_rating: { type: Number, required: false },
    //         movie_title: { type: String, required: true }
    //     }
    //     ],
    movies: { type: Schema.Types.ObjectId, ref: 'Movie' },
});

module.exports = mongoose.model('User', userSchema);

