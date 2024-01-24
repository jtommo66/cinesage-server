const express = require("express");
const router = express.Router();

const {} = require("../controllers/movie-controller");

router.route("/").get();

module.exports = router;
