/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("genre").del();
  await knex("genre").insert([
    {
      id: 1,
      genre: "Horror",
    },
    {
      id: 2,
      genre: "Comedy",
    },
    {
      id: 3,
      genre: "Family",
    },
    {
      id: 4,
      genre: "Drama",
    },
    {
      id: 5,
      genre: "Thriller",
    },
    {
      id: 6,
      genre: "Martial Arts",
    },
    {
      id: 7,
      genre: "Action",
    },
    {
      id: 8,
      genre: "Fantasy",
    },
    {
      id: 9,
      genre: "Adventure",
    },
    {
      id: 10,
      genre: "Crime",
    },
    {
      id: 11,
      genre: "Animation",
    },
    {
      id: 12,
      genre: "History",
    },
    {
      id: 13,
      genre: "Sports",
    },
    {
      id: 14,
      genre: "Mystery",
    },
    {
      id: 15,
      genre: "Sci-fi",
    },
    {
      id: 16,
      genre: "War",
    },
    {
      id: 17,
      genre: "Western",
    },
  ]);
};
