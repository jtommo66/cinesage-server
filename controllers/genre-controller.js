const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

const genreMovieList = async (req, res) => {
  try {
    const movies = await knex("movie");

    const mappedMovies = await Promise.all(
      movies.map(async (movie) => {
        if (movie.image) {
          movie.image = `${process.env.API_URL}:${
            process.env.PORT
          }/images/${movie.image.split("/").pop()}`;
        }

        const genres = await knex("movie_genre")
          .join("genre", "movie_genre.genre_id", "genre.id")
          .where({ genre_id: genre.id })
          .select("genre");

        movie.genre = genres.map((object) => object.genre);

        const directors = await knex("movie_director")
          .join("director", "movie_director.director_id", "director.id")
          .where({ genre_id: genre.id })
          .select("director.name");

        movie.director = directors.map((object) => object.name);

        const keywords = await knex("movie_keyword")
          .join("keyword", "movie_keyword.keyword_id", "keyword.id")
          .where({ genre_id: genre.id })
          .select("keyword");

        movie.keyword = keywords.map((object) => object.keyword);

        return movie;
      })
    );

    res.json(mappedMovies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to find movies list" });
  }
};

module.exports = { genreMovieList };
