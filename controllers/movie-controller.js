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

    // const fullMovieList = await knex
    //   .select("*")
    //   .fromRaw(
    //     "movie_genre as mgenre INNER JOIN movie INNER JOIN movie_keyword as mkeyword INNER JOIN movie_director as mdirector ON mgenre.movie_id = movie.id AND mkeyword.movie_id = movie.id AND mdirector.movie_id = movie.id;"
    //   );

    const genreMovieList = await knex
      .select("movie_id", "genre", "title", "image", "trailer", "synopsis")
      .fromRaw(
        "movie_genre as mg INNER JOIN genre as g ON mg.genre_id = g.id INNER JOIN movie as m ON m.id = mg.movie_id ORDER BY `movie_id`"
      );

    const directorMovieList = await knex
      .select("movie_id", "name", "title", "image", "trailer", "synopsis")
      .fromRaw(
        "movie_director as md INNER JOIN director as d ON md.director_id = d.id INNER JOIN movie as m ON m.id = md.movie_id ORDER BY `movie_id`"
      );

    const keywordMovieList = await knex
      .select("movie_id", "keyword", "title", "image", "trailer", "synopsis")
      .fromRaw(
        "movie_keyword as mk INNER JOIN keyword as k ON mk.keyword_id = k.id INNER JOIN movie as m ON m.id = mk.movie_id ORDER BY `movie_id`"
      );

    const completeMovieList = {
      ...movies,
      genre: genreMovieList.genre,
      director: directorMovieList.name,
      keyword: keywordMovieList.keyword,
    };

    res.json(completeMovieList);
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

    const genres = await knex("movie_genre")
      .join("genre", "movie_genre.genre_id", "genre.id")
      .where({ movie_id: req.params.id })
      .select("genre");

    const mappedGenres = genres.map((object) => object.genre);

    const directors = await knex("movie_director")
      .join("director", "movie_director.director_id", "director.id")
      .where({ movie_id: req.params.id })
      .select("director.name");

    const mappedDirectors = directors.map((object) => object.name);

    const keywords = await knex("movie_keyword")
      .join("keyword", "movie_keyword.keyword_id", "keyword.id")
      .where({ movie_id: req.params.id })
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
      .json({ message: `Unable to retrieve movie ID ${req.params.id}` });
  }
};

module.exports = { singleMovie, movieList };
