const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

const singleGenre = async (req, res) => {
  try {
    const movie = await knex("movie")
      .where({ "genre.id": req.params.id })
      .first()
      .select("id", "title", "image", "trailer", "synopsis");

    movie.image = `${process.env.API_URL}:${process.env.PORT}/${movie.image}`;

    const genres = await knex("movie_genre")
      .join("genre", "movie_genre.genre_id", "genre.id")
      .where({ genre_id: req.params.id })
      .select("genre");

    const mappedGenres = genres.map((object) => object.genre);

    const directors = await knex("movie_director")
      .join("director", "movie_director.director_id", "director.id")
      .where({ genre_id: req.params.id })
      .select("director.name");

    const mappedDirectors = directors.map((object) => object.name);

    const keywords = await knex("movie_keyword")
      .join("keyword", "movie_keyword.keyword_id", "keyword.id")
      .where({ genre_id: req.params.id })
      .select("keyword");

    const mappedKeywords = keywords.map((object) => object.keyword);

    const completedMovie = {
      ...movie,
      genre: mappedGenres,
      director: mappedDirectors,
      keyword: mappedKeywords,
    };

    res.json(completedMovie);
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ message: `Unable to retrieve genre ID ${req.params.id}` });
  }
};

module.exports = { singleGenre };
