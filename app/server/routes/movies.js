import express from "express"
import MoviesJsonData from '!json!../../static/movies.json';

let router = express.Router();

router.route("/")
    .get(function(req, res) {
        res.json(MoviesJsonData);
    });

export default router;
