const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/login-controller");

router.route("/register").post(register);
router.route("/").post(login);

module.exports = router;
