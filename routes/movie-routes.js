const express = require("express");
const router = express.Router();

const {
  singleMovie,
  movieList,
  genreMovieList,
} = require("../controllers/movie-controller");

router.route("/").get(movieList);
router.route("/:id").get(singleMovie);
router.route("/genre/:genre").get(genreMovieList);

module.exports = router;
