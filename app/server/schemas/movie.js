import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    Title: String,
    Year: String,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    Metascore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbID: String,
    Type: String,
    Response: String
});

export const Movie = mongoose.model('movie', movieSchema);
