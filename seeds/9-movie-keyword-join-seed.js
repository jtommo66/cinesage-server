/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("movie_keyword").del();
  await knex("movie_keyword").insert([
    {
      movie_id: 1,
      keyword_id: 1,
    },
    {
      movie_id: 1,
      keyword_id: 2,
    },
    {
      movie_id: 1,
      keyword_id: 3,
    },
    {
      movie_id: 2,
      keyword_id: 4,
    },

    {
      movie_id: 2,
      keyword_id: 2,
    },
    {
      movie_id: 2,
      keyword_id: 5,
    },

    {
      movie_id: 3,
      keyword_id: 6,
    },
    {
      movie_id: 3,
      keyword_id: 2,
    },

    {
      movie_id: 3,
      keyword_id: 7,
    },
    {
      movie_id: 4,
      keyword_id: 8,
    },

    {
      movie_id: 4,
      keyword_id: 9,
    },
    {
      movie_id: 4,
      keyword_id: 10,
    },

    {
      movie_id: 5,
      keyword_id: 3,
    },
    {
      movie_id: 5,
      keyword_id: 11,
    },

    {
      movie_id: 5,
      keyword_id: 12,
    },
    {
      movie_id: 6,
      keyword_id: 3,
    },

    {
      movie_id: 6,
      keyword_id: 11,
    },
    {
      movie_id: 6,
      keyword_id: 12,
    },

    {
      movie_id: 7,
      keyword_id: 13,
    },
    {
      movie_id: 7,
      keyword_id: 14,
    },

    {
      movie_id: 7,
      keyword_id: 12,
    },
    {
      movie_id: 8,
      keyword_id: 13,
    },

    {
      movie_id: 8,
      keyword_id: 14,
    },
    {
      movie_id: 8,
      keyword_id: 12,
    },

    {
      movie_id: 9,
      keyword_id: 13,
    },
    {
      movie_id: 9,
      keyword_id: 14,
    },

    {
      movie_id: 9,
      keyword_id: 12,
    },
    {
      movie_id: 10,
      keyword_id: 15,
    },

    {
      movie_id: 10,
      keyword_id: 16,
    },
    {
      movie_id: 10,
      keyword_id: 11,
    },
    {
      movie_id: 11,
      keyword_id: 4,
    },

    {
      movie_id: 11,
      keyword_id: 3,
    },
    {
      movie_id: 11,
      keyword_id: 2,
    },

    {
      movie_id: 12,
      keyword_id: 17,
    },
    {
      movie_id: 12,
      keyword_id: 18,
    },

    {
      movie_id: 12,
      keyword_id: 2,
    },
    {
      movie_id: 13,
      keyword_id: 3,
    },

    {
      movie_id: 13,
      keyword_id: 18,
    },
    {
      movie_id: 13,
      keyword_id: 15,
    },

    {
      movie_id: 14,
      keyword_id: 6,
    },
    {
      movie_id: 14,
      keyword_id: 19,
    },

    {
      movie_id: 14,
      keyword_id: 20,
    },
    {
      movie_id: 15,
      keyword_id: 6,
    },

    {
      movie_id: 15,
      keyword_id: 19,
    },
    {
      movie_id: 15,
      keyword_id: 20,
    },

    {
      movie_id: 16,
      keyword_id: 21,
    },
    {
      movie_id: 16,
      keyword_id: 36,
    },

    {
      movie_id: 16,
      keyword_id: 20,
    },
    {
      movie_id: 17,
      keyword_id: 2,
    },

    {
      movie_id: 17,
      keyword_id: 22,
    },
    {
      movie_id: 17,
      keyword_id: 20,
    },

    {
      movie_id: 18,
      keyword_id: 2,
    },
    {
      movie_id: 18,
      keyword_id: 35,
    },

    {
      movie_id: 18,
      keyword_id: 20,
    },
    {
      movie_id: 19,
      keyword_id: 6,
    },

    {
      movie_id: 19,
      keyword_id: 4,
    },
    {
      movie_id: 19,
      keyword_id: 22,
    },

    {
      movie_id: 20,
      keyword_id: 4,
    },
    {
      movie_id: 20,
      keyword_id: 6,
    },

    {
      movie_id: 20,
      keyword_id: 34,
    },
    {
      movie_id: 21,
      keyword_id: 18,
    },

    {
      movie_id: 21,
      keyword_id: 24,
    },
    {
      movie_id: 21,
      keyword_id: 38,
    },

    {
      movie_id: 22,
      keyword_id: 2,
    },
    {
      movie_id: 22,
      keyword_id: 20,
    },

    {
      movie_id: 22,
      keyword_id: 24,
    },
    {
      movie_id: 23,
      keyword_id: 25,
    },

    {
      movie_id: 23,
      keyword_id: 26,
    },
    {
      movie_id: 23,
      keyword_id: 21,
    },

    {
      movie_id: 24,
      keyword_id: 25,
    },
    {
      movie_id: 24,
      keyword_id: 26,
    },

    {
      movie_id: 24,
      keyword_id: 21,
    },
    {
      movie_id: 25,
      keyword_id: 4,
    },

    {
      movie_id: 25,
      keyword_id: 6,
    },
    {
      movie_id: 25,
      keyword_id: 2,
    },

    {
      movie_id: 26,
      keyword_id: 4,
    },
    {
      movie_id: 26,
      keyword_id: 6,
    },

    {
      movie_id: 26,
      keyword_id: 3,
    },
    {
      movie_id: 27,
      keyword_id: 17,
    },

    {
      movie_id: 27,
      keyword_id: 15,
    },
    {
      movie_id: 27,
      keyword_id: 27,
    },
    {
      movie_id: 28,
      keyword_id: 2,
    },

    {
      movie_id: 28,
      keyword_id: 28,
    },
    {
      movie_id: 28,
      keyword_id: 36,
    },

    {
      movie_id: 29,
      keyword_id: 29,
    },
    {
      movie_id: 29,
      keyword_id: 30,
    },

    {
      movie_id: 29,
      keyword_id: 28,
    },
    {
      movie_id: 30,
      keyword_id: 17,
    },

    {
      movie_id: 30,
      keyword_id: 15,
    },
    {
      movie_id: 30,
      keyword_id: 30,
    },

    {
      movie_id: 31,
      keyword_id: 3,
    },
    {
      movie_id: 31,
      keyword_id: 17,
    },
    {
      movie_id: 31,
      keyword_id: 2,
    },
    {
      movie_id: 32,
      keyword_id: 2,
    },

    {
      movie_id: 32,
      keyword_id: 31,
    },

    {
      movie_id: 32,
      keyword_id: 32,
    },

    {
      movie_id: 33,
      keyword_id: 2,
    },

    {
      movie_id: 33,
      keyword_id: 31,
    },

    {
      movie_id: 33,
      keyword_id: 32,
    },

    {
      movie_id: 34,
      keyword_id: 2,
    },

    {
      movie_id: 34,
      keyword_id: 31,
    },

    {
      movie_id: 34,
      keyword_id: 32,
    },

    {
      movie_id: 35,
      keyword_id: 14,
    },

    {
      movie_id: 35,
      keyword_id: 37,
    },

    {
      movie_id: 35,
      keyword_id: 20,
    },

    {
      movie_id: 36,
      keyword_id: 8,
    },

    {
      movie_id: 36,
      keyword_id: 9,
    },

    {
      movie_id: 36,
      keyword_id: 3,
    },

    {
      movie_id: 37,
      keyword_id: 30,
    },

    {
      movie_id: 37,
      keyword_id: 33,
    },

    {
      movie_id: 37,
      keyword_id: 9,
    },

    {
      movie_id: 38,
      keyword_id: 2,
    },

    {
      movie_id: 38,
      keyword_id: 30,
    },

    {
      movie_id: 38,
      keyword_id: 4,
    },

    {
      movie_id: 39,
      keyword_id: 15,
    },

    {
      movie_id: 39,
      keyword_id: 38,
    },

    {
      movie_id: 39,
      keyword_id: 18,
    },

    {
      movie_id: 40,
      keyword_id: 31,
    },

    {
      movie_id: 40,
      keyword_id: 32,
    },

    {
      movie_id: 40,
      keyword_id: 2,
    },

    {
      movie_id: 41,
      keyword_id: 31,
    },

    {
      movie_id: 41,
      keyword_id: 32,
    },

    {
      movie_id: 41,
      keyword_id: 2,
    },

    {
      movie_id: 42,
      keyword_id: 2,
    },

    {
      movie_id: 42,
      keyword_id: 22,
    },

    {
      movie_id: 42,
      keyword_id: 39,
    },
  ]);
};
