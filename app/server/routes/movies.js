import express from "express"
// @todo replace with mongoDB data
import MoviesJsonData from '!json!../../static/movies.json';

let router = express.Router();

router.route("/")
    .get(function(req, res) {
        res.json(MoviesJsonData);
    });

router.route('/:movieId')
    .get(function(req, res) {
        const movie = MoviesJsonData.find((movie) => {
            return movie.imdbID === req.params.movieId;
        });
        // @todo check on empty movie otherwise redirect to 404;
        res.json(movie);
    });

export default router;
