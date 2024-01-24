/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("director").del();
  await knex("director").insert([
    {
      id: 1,
      name: "Edgar Wright",
    },
    {
      id: 2,
      name: "Greg Mottola",
    },
    {
      id: 3,
      name: "Steve Bendelack",
    },
    {
      id: 4,
      name: "Quentin Tarantino",
    },
    {
      id: 5,
      name: "Peter Jackson",
    },
    {
      id: 6,
      name: "The Coen Brothers",
    },
    {
      id: 7,
      name: "Bong Joon-ho",
    },
    {
      id: 8,
      name: "Ari Aster",
    },
    {
      id: 9,
      name: "Wes Anderson",
    },
    {
      id: 10,
      name: "Dean Fleischer Camp",
    },
    {
      id: 11,
      name: "Terry Gilliam",
    },
    {
      id: 12,
      name: "Armando Iannucci",
    },
    {
      id: 13,
      name: "Philip Barantini",
    },
    {
      id: 14,
      name: "Jon Favreau",
    },
    {
      id: 15,
      name: "Rodney Rothman",
    },
    {
      id: 16,
      name: "Joaquim Dos Santos",
    },
    {
      id: 17,
      name: "Martin McDonagh",
    },
    {
      id: 18,
      name: "Bennett Miller",
    },
    {
      id: 19,
      name: "Ridley Scott",
    },
    {
      id: 20,
      name: "David Leitch",
    },
    {
      id: 21,
      name: "John Lasseter",
    },
    {
      id: 22,
      name: "Lee Unkrich",
    },
    {
      id: 23,
      name: "Travis Knight",
    },
    {
      id: 24,
      name: "Nicolas Winding Refn",
    },
    {
      id: 25,
      name: "Martin Scorsese",
    },
    {
      id: 26,
      name: "Pete Docter",
    },
    {
      id: 27,
      name: "Dan Scanlon",
    },
  ]);
};
