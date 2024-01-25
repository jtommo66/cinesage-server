const express = require("express");
const router = express.Router();

const { singleMovie, movieList } = require("../controllers/movie-controller");

router.route("/").get(movieList);
router.route("/:id").get(singleMovie);

module.exports = router;
