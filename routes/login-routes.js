const express = require("express");
const router = express.Router();

router.route("/register").post(register);
router.route("/").post(login);

module.exports = router;
