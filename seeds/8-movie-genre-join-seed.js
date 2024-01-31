/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("movie_genre").del();
  await knex("movie_genre").insert([
    {
      movie_id: 1,
      genre_id: 1,
    },
    {
      movie_id: 1,
      genre_id: 2,
    },
    {
      movie_id: 2,
      genre_id: 2,
    },

    {
      movie_id: 3,
      genre_id: 2,
    },
    {
      movie_id: 3,
      genre_id: 3,
    },

    {
      movie_id: 4,
      genre_id: 4,
    },

    {
      movie_id: 4,
      genre_id: 2,
    },
    {
      movie_id: 4,
      genre_id: 5,
    },

    {
      movie_id: 5,
      genre_id: 6,
    },
    {
      movie_id: 5,
      genre_id: 7,
    },

    {
      movie_id: 5,
      genre_id: 5,
    },
    {
      movie_id: 6,
      genre_id: 6,
    },

    {
      movie_id: 6,
      genre_id: 7,
    },
    {
      movie_id: 6,
      genre_id: 5,
    },

    {
      movie_id: 7,
      genre_id: 8,
    },
    {
      movie_id: 7,
      genre_id: 9,
    },

    {
      movie_id: 7,
      genre_id: 7,
    },
    {
      movie_id: 8,
      genre_id: 8,
    },

    {
      movie_id: 8,
      genre_id: 9,
    },
    {
      movie_id: 8,
      genre_id: 7,
    },

    {
      movie_id: 9,
      genre_id: 8,
    },
    {
      movie_id: 9,
      genre_id: 9,
    },

    {
      movie_id: 9,
      genre_id: 7,
    },
    {
      movie_id: 10,
      genre_id: 10,
    },

    {
      movie_id: 10,
      genre_id: 5,
    },
    {
      movie_id: 10,
      genre_id: 4,
    },
    {
      movie_id: 11,
      genre_id: 7,
    },

    {
      movie_id: 11,
      genre_id: 10,
    },
    {
      movie_id: 11,
      genre_id: 2,
    },

    {
      movie_id: 12,
      genre_id: 10,
    },
    {
      movie_id: 12,
      genre_id: 5,
    },

    {
      movie_id: 12,
      genre_id: 4,
    },
    {
      movie_id: 13,
      genre_id: 1,
    },

    {
      movie_id: 13,
      genre_id: 14,
    },
    {
      movie_id: 13,
      genre_id: 4,
    },

    {
      movie_id: 14,
      genre_id: 2,
    },

    {
      movie_id: 14,
      genre_id: 4,
    },

    {
      movie_id: 15,
      genre_id: 2,
    },
    {
      movie_id: 15,
      genre_id: 4,
    },

    {
      movie_id: 16,
      genre_id: 2,
    },
    {
      movie_id: 16,
      genre_id: 9,
    },

    {
      movie_id: 16,
      genre_id: 11,
    },
    {
      movie_id: 17,
      genre_id: 2,
    },

    {
      movie_id: 17,
      genre_id: 9,
    },
    {
      movie_id: 17,
      genre_id: 4,
    },

    {
      movie_id: 18,
      genre_id: 11,
    },
    {
      movie_id: 18,
      genre_id: 2,
    },

    {
      movie_id: 18,
      genre_id: 3,
    },
    {
      movie_id: 19,
      genre_id: 4,
    },

    {
      movie_id: 19,
      genre_id: 2,
    },
    {
      movie_id: 19,
      genre_id: 9,
    },

    {
      movie_id: 20,
      genre_id: 4,
    },
    {
      movie_id: 20,
      genre_id: 2,
    },

    {
      movie_id: 20,
      genre_id: 12,
    },
    {
      movie_id: 21,
      genre_id: 4,
    },

    {
      movie_id: 21,
      genre_id: 5,
    },
    {
      movie_id: 22,
      genre_id: 3,
    },
    {
      movie_id: 22,
      genre_id: 2,
    },
    {
      movie_id: 23,
      genre_id: 11,
    },

    {
      movie_id: 23,
      genre_id: 9,
    },
    {
      movie_id: 23,
      genre_id: 7,
    },

    {
      movie_id: 24,
      genre_id: 11,
    },
    {
      movie_id: 24,
      genre_id: 9,
    },

    {
      movie_id: 24,
      genre_id: 7,
    },
    {
      movie_id: 25,
      genre_id: 2,
    },

    {
      movie_id: 25,
      genre_id: 10,
    },
    {
      movie_id: 26,
      genre_id: 4,
    },
    {
      movie_id: 26,
      genre_id: 2,
    },

    {
      movie_id: 26,
      genre_id: 10,
    },
    {
      movie_id: 27,
      genre_id: 4,
    },
    {
      movie_id: 27,
      genre_id: 10,
    },
    {
      movie_id: 28,
      genre_id: 4,
    },

    {
      movie_id: 28,
      genre_id: 2,
    },
    {
      movie_id: 29,
      genre_id: 4,
    },

    {
      movie_id: 29,
      genre_id: 13,
    },
    {
      movie_id: 30,
      genre_id: 4,
    },

    {
      movie_id: 30,
      genre_id: 12,
    },
    {
      movie_id: 30,
      genre_id: 7,
    },

    {
      movie_id: 31,
      genre_id: 5,
    },
    {
      movie_id: 31,
      genre_id: 2,
    },
    {
      movie_id: 31,
      genre_id: 7,
    },
    {
      movie_id: 32,
      genre_id: 11,
    },

    {
      movie_id: 32,
      genre_id: 2,
    },

    {
      movie_id: 32,
      genre_id: 3,
    },

    {
      movie_id: 33,
      genre_id: 11,
    },

    {
      movie_id: 33,
      genre_id: 2,
    },

    {
      movie_id: 33,
      genre_id: 3,
    },

    {
      movie_id: 34,
      genre_id: 11,
    },

    {
      movie_id: 34,
      genre_id: 2,
    },

    {
      movie_id: 34,
      genre_id: 3,
    },

    {
      movie_id: 35,
      genre_id: 11,
    },

    {
      movie_id: 35,
      genre_id: 9,
    },

    {
      movie_id: 35,
      genre_id: 3,
    },

    {
      movie_id: 36,
      genre_id: 5,
    },

    {
      movie_id: 36,
      genre_id: 4,
    },

    {
      movie_id: 36,
      genre_id: 10,
    },

    {
      movie_id: 37,
      genre_id: 4,
    },

    {
      movie_id: 37,
      genre_id: 10,
    },

    {
      movie_id: 38,
      genre_id: 4,
    },

    {
      movie_id: 38,
      genre_id: 10,
    },

    {
      movie_id: 38,
      genre_id: 2,
    },

    {
      movie_id: 39,
      genre_id: 4,
    },

    {
      movie_id: 39,
      genre_id: 14,
    },

    {
      movie_id: 39,
      genre_id: 5,
    },

    {
      movie_id: 40,
      genre_id: 11,
    },

    {
      movie_id: 40,
      genre_id: 2,
    },

    {
      movie_id: 40,
      genre_id: 3,
    },

    {
      movie_id: 41,
      genre_id: 11,
    },

    {
      movie_id: 41,
      genre_id: 2,
    },

    {
      movie_id: 41,
      genre_id: 3,
    },

    {
      movie_id: 42,
      genre_id: 2,
    },

    {
      movie_id: 42,
      genre_id: 9,
    },

    {
      movie_id: 42,
      genre_id: 15,
    },
    {
      movie_id: 43,
      genre_id: 1,
    },
    {
      movie_id: 43,
      genre_id: 14,
    },
    {
      movie_id: 43,
      genre_id: 5,
    },
    {
      movie_id: 44,
      genre_id: 1,
    },
    {
      movie_id: 44,
      genre_id: 7,
    },
    {
      movie_id: 44,
      genre_id: 4,
    },
    {
      movie_id: 45,
      genre_id: 6,
    },
    {
      movie_id: 45,
      genre_id: 8,
    },
    {
      movie_id: 45,
      genre_id: 9,
    },
    {
      movie_id: 46,
      genre_id: 1,
    },
    {
      movie_id: 47,
      genre_id: 1,
    },
    {
      movie_id: 47,
      genre_id: 15,
    },
    {
      movie_id: 47,
      genre_id: 4,
    },
    {
      movie_id: 48,
      genre_id: 1,
    },
    {
      movie_id: 48,
      genre_id: 15,
    },
    {
      movie_id: 48,
      genre_id: 4,
    },
    {
      movie_id: 49,
      genre_id: 1,
    },
    {
      movie_id: 49,
      genre_id: 5,
    },
    {
      movie_id: 49,
      genre_id: 7,
    },
    {
      movie_id: 50,
      genre_id: 1,
    },
    {
      movie_id: 50,
      genre_id: 2,
    },
    {
      movie_id: 50,
      genre_id: 7,
    },
    {
      movie_id: 51,
      genre_id: 1,
    },
    {
      movie_id: 51,
      genre_id: 2,
    },
    {
      movie_id: 51,
      genre_id: 7,
    },
    {
      movie_id: 52,
      genre_id: 16,
    },
    {
      movie_id: 52,
      genre_id: 12,
    },
    {
      movie_id: 52,
      genre_id: 9,
    },
    {
      movie_id: 53,
      genre_id: 17,
    },
    {
      movie_id: 53,
      genre_id: 4,
    },
    {
      movie_id: 53,
      genre_id: 7,
    },
    {
      movie_id: 54,
      genre_id: 3,
    },
    {
      movie_id: 54,
      genre_id: 8,
    },
    {
      movie_id: 54,
      genre_id: 9,
    },
    {
      movie_id: 55,
      genre_id: 15,
    },
    {
      movie_id: 55,
      genre_id: 14,
    },
    {
      movie_id: 55,
      genre_id: 5,
    },
    {
      movie_id: 56,
      genre_id: 15,
    },
    {
      movie_id: 56,
      genre_id: 14,
    },
    {
      movie_id: 56,
      genre_id: 4,
    },
    {
      movie_id: 57,
      genre_id: 15,
    },
    {
      movie_id: 57,
      genre_id: 14,
    },
    {
      movie_id: 57,
      genre_id: 7,
    },
    {
      movie_id: 58,
      genre_id: 15,
    },
    {
      movie_id: 58,
      genre_id: 14,
    },
    {
      movie_id: 58,
      genre_id: 9,
    },
    {
      movie_id: 59,
      genre_id: 15,
    },
    {
      movie_id: 59,
      genre_id: 14,
    },
    {
      movie_id: 59,
      genre_id: 5,
    },
    {
      movie_id: 60,
      genre_id: 15,
    },
    {
      movie_id: 60,
      genre_id: 8,
    },
    {
      movie_id: 60,
      genre_id: 9,
    },
    {
      movie_id: 61,
      genre_id: 14,
    },
    {
      movie_id: 61,
      genre_id: 1,
    },
    {
      movie_id: 61,
      genre_id: 4,
    },
    {
      movie_id: 62,
      genre_id: 5,
    },
    {
      movie_id: 62,
      genre_id: 10,
    },
    {
      movie_id: 62,
      genre_id: 14,
    },
  ]);
};
