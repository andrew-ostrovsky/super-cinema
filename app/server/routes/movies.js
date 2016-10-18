import express from "express"
import {
    Movie
} from '../schemas/movies';

let router = express.Router();

router.route("/")
    .get(function(req, res) {
        Movie.find((err, movieList) => {
            res.json(movieList);
        });
    });

router.route('/:movieId')
    .get(function(req, res) {
        Movie.findOne({imdbID: req.params.movieId},(err, movie) => {
            res.json(movie);
        });
    });

export default router;
