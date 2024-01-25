const express = require("express");
const router = express.Router();

const { movieList } = require("../controllers/movie-controller");

router.route("/").get(movieList);

module.exports = router;
