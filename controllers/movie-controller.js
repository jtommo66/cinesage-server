const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

const movieList = async (req, res) => {
  try {
    const movies = await knex("movie");

    movies.forEach((movie) => {
      if (movie.image) {
        movie.image = `${process.env.API_URL}:${
          process.env.PORT
        }/images/${movie.image.split("/").pop()}`;
      }
    });

    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to find movies list" });
  }
};

const singleMovie = async (req, res) => {
  try {
    const movie = await knex("movie")
      .where({ "movie.id": req.params.id })
      .first()
      .select("id", "title", "image", "trailer", "synopsis");

    movie.image = `${process.env.API_URL}:${process.env.PORT}/${movie.image}`;

    res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ message: `Unable to retrieve movie ID ${req.params.id}` });
  }
};

module.exports = { singleMovie, movieList };
