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
    {
      movie_id: 43,
      keyword_id: 38,
    },
    {
      movie_id: 43,
      keyword_id: 15,
    },
    {
      movie_id: 43,
      keyword_id: 40,
    },
    {
      movie_id: 44,
      keyword_id: 1,
    },
    {
      movie_id: 44,
      keyword_id: 15,
    },
    {
      movie_id: 44,
      keyword_id: 18,
    },
    {
      movie_id: 45,
      keyword_id: 12,
    },
    {
      movie_id: 45,
      keyword_id: 14,
    },
    {
      movie_id: 45,
      keyword_id: 13,
    },
    {
      movie_id: 46,
      keyword_id: 1,
    },
    {
      movie_id: 46,
      keyword_id: 15,
    },
    {
      movie_id: 46,
      keyword_id: 40,
    },
    {
      movie_id: 47,
      keyword_id: 1,
    },
    {
      movie_id: 47,
      keyword_id: 40,
    },
    {
      movie_id: 47,
      keyword_id: 17,
    },
    {
      movie_id: 48,
      keyword_id: 1,
    },
    {
      movie_id: 48,
      keyword_id: 40,
    },
    {
      movie_id: 48,
      keyword_id: 17,
    },
    {
      movie_id: 49,
      keyword_id: 1,
    },
    {
      movie_id: 49,
      keyword_id: 15,
    },
    {
      movie_id: 49,
      keyword_id: 18,
    },
    {
      movie_id: 50,
      keyword_id: 1,
    },
    {
      movie_id: 50,
      keyword_id: 3,
    },
    {
      movie_id: 50,
      keyword_id: 4,
    },
    {
      movie_id: 51,
      keyword_id: 1,
    },
    {
      movie_id: 51,
      keyword_id: 3,
    },
    {
      movie_id: 51,
      keyword_id: 4,
    },
    {
      movie_id: 52,
      keyword_id: 3,
    },
    {
      movie_id: 52,
      keyword_id: 17,
    },
    {
      movie_id: 52,
      keyword_id: 34,
    },
    {
      movie_id: 53,
      keyword_id: 3,
    },
    {
      movie_id: 53,
      keyword_id: 9,
    },
    {
      movie_id: 53,
      keyword_id: 17,
    },
    {
      movie_id: 54,
      keyword_id: 12,
    },
    {
      movie_id: 54,
      keyword_id: 14,
    },
    {
      movie_id: 54,
      keyword_id: 36,
    },
    {
      movie_id: 55,
      keyword_id: 39,
    },
    {
      movie_id: 55,
      keyword_id: 38,
    },
    {
      movie_id: 55,
      keyword_id: 18,
    },
    {
      movie_id: 56,
      keyword_id: 15,
    },
    {
      movie_id: 56,
      keyword_id: 38,
    },
    {
      movie_id: 56,
      keyword_id: 18,
    },
    {
      movie_id: 57,
      keyword_id: 15,
    },
    {
      movie_id: 57,
      keyword_id: 38,
    },
    {
      movie_id: 57,
      keyword_id: 18,
    },
    {
      movie_id: 58,
      keyword_id: 39,
    },
    {
      movie_id: 58,
      keyword_id: 38,
    },
    {
      movie_id: 58,
      keyword_id: 18,
    },
    {
      movie_id: 59,
      keyword_id: 39,
    },
    {
      movie_id: 59,
      keyword_id: 38,
    },
    {
      movie_id: 59,
      keyword_id: 18,
    },
    {
      movie_id: 60,
      keyword_id: 13,
    },
    {
      movie_id: 60,
      keyword_id: 10,
    },
    {
      movie_id: 60,
      keyword_id: 27,
    },
    {
      movie_id: 61,
      keyword_id: 40,
    },
    {
      movie_id: 61,
      keyword_id: 38,
    },
    {
      movie_id: 61,
      keyword_id: 16,
    },
    {
      movie_id: 62,
      keyword_id: 18,
    },
    {
      movie_id: 62,
      keyword_id: 38,
    },
    {
      movie_id: 62,
      keyword_id: 17,
    },
    {
      movie_id: 63,
      keyword_id: 30,
    },
    {
      movie_id: 63,
      keyword_id: 36,
    },
    {
      movie_id: 63,
      keyword_id: 38,
    },
    {
      movie_id: 63,
      keyword_id: 30,
    },
    {
      movie_id: 63,
      keyword_id: 34,
    },
    {
      movie_id: 63,
      keyword_id: 29,
    },
    {
      movie_id: 65,
      keyword_id: 30,
    },
    {
      movie_id: 65,
      keyword_id: 29,
    },
    {
      movie_id: 65,
      keyword_id: 31,
    },
    {
      movie_id: 66,
      keyword_id: 30,
    },
    {
      movie_id: 66,
      keyword_id: 34,
    },
    {
      movie_id: 66,
      keyword_id: 38,
    },
    {
      movie_id: 67,
      keyword_id: 30,
    },
    {
      movie_id: 67,
      keyword_id: 36,
    },
    {
      movie_id: 67,
      keyword_id: 38,
    },
    {
      movie_id: 68,
      keyword_id: 30,
    },
    {
      movie_id: 68,
      keyword_id: 17,
    },
    {
      movie_id: 68,
      keyword_id: 9,
    },
    {
      movie_id: 69,
      keyword_id: 30,
    },
    {
      movie_id: 69,
      keyword_id: 18,
    },
    {
      movie_id: 69,
      keyword_id: 16,
    },
    {
      movie_id: 70,
      keyword_id: 30,
    },
    {
      movie_id: 70,
      keyword_id: 29,
    },
    {
      movie_id: 70,
      keyword_id: 18,
    },
    {
      movie_id: 71,
      keyword_id: 29,
    },
    {
      movie_id: 71,
      keyword_id: 2,
    },
    {
      movie_id: 71,
      keyword_id: 5,
    },
    {
      movie_id: 72,
      keyword_id: 30,
    },
    {
      movie_id: 72,
      keyword_id: 34,
    },
    {
      movie_id: 72,
      keyword_id: 38,
    },
    {
      movie_id: 73,
      keyword_id: 18,
    },
    {
      movie_id: 73,
      keyword_id: 3,
    },
    {
      movie_id: 73,
      keyword_id: 38,
    },
    {
      movie_id: 74,
      keyword_id: 18,
    },
    {
      movie_id: 74,
      keyword_id: 30,
    },
    {
      movie_id: 74,
      keyword_id: 34,
    },
    {
      movie_id: 75,
      keyword_id: 18,
    },
    {
      movie_id: 75,
      keyword_id: 38,
    },
    {
      movie_id: 75,
      keyword_id: 34,
    },
    {
      movie_id: 76,
      keyword_id: 30,
    },
    {
      movie_id: 76,
      keyword_id: 38,
    },
    {
      movie_id: 76,
      keyword_id: 34,
    },
    {
      movie_id: 77,
      keyword_id: 30,
    },
    {
      movie_id: 77,
      keyword_id: 38,
    },
    {
      movie_id: 77,
      keyword_id: 17,
    },
    {
      movie_id: 78,
      keyword_id: 30,
    },
    {
      movie_id: 78,
      keyword_id: 38,
    },
    {
      movie_id: 78,
      keyword_id: 18,
    },
    {
      movie_id: 79,
      keyword_id: 3,
    },
    {
      movie_id: 79,
      keyword_id: 38,
    },
    {
      movie_id: 79,
      keyword_id: 18,
    },
    {
      movie_id: 80,
      keyword_id: 10,
    },
    {
      movie_id: 80,
      keyword_id: 16,
    },
    {
      movie_id: 80,
      keyword_id: 30,
    },
    {
      movie_id: 81,
      keyword_id: 28,
    },
    {
      movie_id: 81,
      keyword_id: 18,
    },
    {
      movie_id: 81,
      keyword_id: 34,
    },
    {
      movie_id: 82,
      keyword_id: 14,
    },
    {
      movie_id: 82,
      keyword_id: 17,
    },
    {
      movie_id: 82,
      keyword_id: 3,
    },
    {
      movie_id: 83,
      keyword_id: 22,
    },
    {
      movie_id: 83,
      keyword_id: 14,
    },
    {
      movie_id: 83,
      keyword_id: 12,
    },
    {
      movie_id: 84,
      keyword_id: 13,
    },
    {
      movie_id: 84,
      keyword_id: 14,
    },
    {
      movie_id: 84,
      keyword_id: 12,
    },
    {
      movie_id: 85,
      keyword_id: 15,
    },
    {
      movie_id: 85,
      keyword_id: 12,
    },
    {
      movie_id: 85,
      keyword_id: 17,
    },
  ]);
};
