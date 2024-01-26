const express = require("express");
const router = express.Router();
const { singleGenre } = require("../controllers/genre-controller");

router.route(":genre").get(singleGenre);

module.exports = router;
