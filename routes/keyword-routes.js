const express = require("express");
const router = express.Router();

const { keywordList } = require("../controllers/keyword-controller");

router.route("/").get(keywordList);

module.exports = router;
