const express = require("express");
const router = express.Router();

const {
  singleMovie,
  movieList,
  genreMovieList,
  keywordMovieList,
} = require("../controllers/movie-controller");

router.route("/").get(movieList);
router.route("/:id").get(singleMovie);
router.route("/genre/:genre").get(genreMovieList);
router.route("/keyword/:keyword").get(keywordMovieList);

module.exports = router;
