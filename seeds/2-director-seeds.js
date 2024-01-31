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
      name: "Joel Coen",
    },
    {
      id: 7,
      name: "Ethan Coen",
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
    {
      id: 28,
      name: "Bong Joon-ho",
    },
    {
      id: 29,
      name: "Peter Ramsey",
    },
    {
      id: 30,
      name: "Bob Persichetti",
    },
    {
      id: 31,
      name: "Justin K. Thompson",
    },
    {
      id: 32,
      name: "Kemp Powers",
    },
    {
      id: 33,
      name: "Garth Jennings",
    },
    {
      id: 34,
      name: "James Wan",
    },
    {
      id: 35,
      name: "Francis Lawrence",
    },
    {
      id: 36,
      name: "Rob Minkoff",
    },
    {
      id: 37,
      name: "Zack Snyder",
    },
    {
      id: 38,
      name: "Danny Boyle",
    },
    {
      id: 39,
      name: "Juan Carlos Fresnadillo",
    },
    {
      id: 40,
      name: "Marc Forster",
    },
    {
      id: 41,
      name: "Ruben Fleischer",
    },
    {
      id: 42,
      name: "Jim Henson",
    },
    {
      id: 43,
      name: "Alex Garland",
    },
    {
      id: 44,
      name: "Denis Villeneuve",
    },
    {
      id: 45,
      name: "Christopher Nolan",
    },
    {
      id: 46,
      name: "Stanley Kubrick",
    },
    {
      id: 47,
      name: "Thomas Carter",
    },
    {
      id: 48,
      name: "Clint Eastwood",
    },
    {
      id: 49,
      name: "Jon Turteltaub",
    },
    {
      id: 50,
      name: "James Mangold",
    },
    {
      id: 51,
      name: "Ron Howard",
    },
    {
      id: 52,
      name: "Bennett Miller",
    },
    {
      id: 53,
      name: "Oliver Stone",
    },
    {
      id: 54,
      name: "Frank Coraci",
    },
    {
      id: 55,
      name: "John Madden",
    },
    {
      id: 56,
      name: "David Ayer",
    },
    {
      id: 57,
      name: "Sam Mendes",
    },
    {
      id: 58,
      name: "Joe Wright",
    },
    {
      id: 59,
      name: "Peter Berg",
    },
    {
      id: 60,
      name: "Steven Spielberg",
    },
    {
      id: 61,
      name: "Steve McQueen",
    },
    {
      id: 62,
      name: "Guillermo del Toro",
    },
    {
      id: 63,
      name: "John Francis Daley",
    },
    {
      id: 64,
      name: "Jonathan Goldstein",
    },
    {
      id: 65,
      name: "Frank Oz",
    },
    {
      id: 66,
      name: "Stephen Sommers",
    },
  ]);
};
