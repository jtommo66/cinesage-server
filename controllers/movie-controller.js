const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

const movieList = async (req, res) => {
  try {
    const movies = await knex("movie").select(
      "id",
      "title",
      "image",
      "trailer",
      "synopsis"
    );

    movies.forEach((movie) => {
      if (movie.image) {
        movie.image = `${process.env.API_URL}:${
          process.env.PORT
        }/images/${movie.image.split("/").pop()}`;
      }
    });
    console.log(movies);
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrieve movie data", error });
  }
};

module.exports = { movieList };
