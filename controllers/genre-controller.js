const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

const genreList = async (req, res) => {
  try {
    const genres = await knex("genre");
    res.json(genres);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to find genre list" });
  }
};
module.exports = { genreList };
