const express = require("express");
const router = express.Router();
const { genreMovieList } = require("../controllers/genre-controller");

router.route(":genre").get(genreMovieList);

module.exports = router;
