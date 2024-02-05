const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const knex = require("knex")(require("../"));

router.route("/").get(login);

module.exports = router;
