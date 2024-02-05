const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Please complete all fields");
  }

  const hashedPassword = bcrypt.hashSync(password, 6);

  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  try {
    await knex("users").insert(newUser);
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "Registration Failed - Try Again Later" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .send("Please add both email and password to log in.");
  }

  try {
    const user = await knex("users").where({ email: email }).first();
    const passwordCorrect = bcrypt.compareSync(password, user.password);

    if (!passwordCorrect) {
      return res.status(400).send("Password Incorrect");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Failed login" });
  }
};

module.exports = { register, login };
