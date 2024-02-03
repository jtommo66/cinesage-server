const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

const movieList = async (req, res) => {
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
          .where({ movie_id: movie.id })
          .select("genre");

        movie.genre = genres.map((object) => object.genre);

        const directors = await knex("movie_director")
          .join("director", "movie_director.director_id", "director.id")
          .where({ movie_id: movie.id })
          .select("director.name");

        movie.director = directors.map((object) => object.name);

        const keywords = await knex("movie_keyword")
          .join("keyword", "movie_keyword.keyword_id", "keyword.id")
          .where({ movie_id: movie.id })
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

    const reviews = await knex
      .select(
        "movie.id",
        "movie.title",
        "movie.image",
        "movie.trailer",
        "movie.synopsis",
        "review.review",
        "review.user_id",
        "review.rating",
        "user.name as user_name"
      )
      .from("movie")
      .innerJoin("review", "movie.id", "review.movie_id")
      .innerJoin("user", "review.user_id", "user.id")
      .where({ "movie.id": req.params.id });

    const mappedReviews = reviews.map((review) => ({
      review: review.review,
      rating: review.rating,
      userName: review.user_name,
    }));

    const completedMovie = {
      ...movie,
      genre: mappedGenres,
      director: mappedDirectors,
      keyword: mappedKeywords,
      review: mappedReviews,
    };

    res.json(completedMovie);
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ message: `Unable to retrieve movie ID ${req.params.id}` });
  }
};

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
          .where({ movie_id: movie.id })
          .select("genre");

        movie.genre = genres.map((object) => object.genre);

        const directors = await knex("movie_director")
          .join("director", "movie_director.director_id", "director.id")
          .where({ movie_id: movie.id })
          .select("director.name");

        movie.director = directors.map((object) => object.name);

        const keywords = await knex("movie_keyword")
          .join("keyword", "movie_keyword.keyword_id", "keyword.id")
          .where({ movie_id: movie.id })
          .select("keyword");

        movie.keyword = keywords.map((object) => object.keyword);

        return movie;
      })
    );

    const movieFilter = mappedMovies.filter((movie) => {
      return movie.genre.includes(req.params.genre);
    });

    res.json(movieFilter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to find genre" });
  }
};

const keywordMovieList = async (req, res) => {
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
          .where({ movie_id: movie.id })
          .select("genre");

        movie.genre = genres.map((object) => object.genre);

        const directors = await knex("movie_director")
          .join("director", "movie_director.director_id", "director.id")
          .where({ movie_id: movie.id })
          .select("director.name");

        movie.director = directors.map((object) => object.name);

        const keywords = await knex("movie_keyword")
          .join("keyword", "movie_keyword.keyword_id", "keyword.id")
          .where({ movie_id: movie.id })
          .select("keyword");

        movie.keyword = keywords.map((object) => object.keyword);

        return movie;
      })
    );

    const movieFilter = mappedMovies.filter((movie) => {
      return movie.keyword.includes(req.params.keyword);
    });

    res.json(movieFilter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to find keyword" });
  }
};

module.exports = { singleMovie, movieList, genreMovieList, keywordMovieList };
