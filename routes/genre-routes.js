const express = require("express");
const router = express.Router();

const { genreList } = require("../controllers/genre-controller");

router.route("/").get(genreList);

module.exports = router;
