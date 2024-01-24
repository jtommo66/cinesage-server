/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("review").del();
  await knex("review").insert([
    {
      id: 1,
      review:
        "No-one can imitate North Korean news anchors like you has to be the rarest compliment ever.",
      movie_id: 12,
      user_id: 1,
      rating: 4,
    },
    {
      id: 2,
      review:
        "The most jarring movie I've ever seen and that's without taking Javier Bardem's haircut into account",
      movie_id: 10,
      user_id: 2,
      rating: 4,
    },
    {
      id: 3,
      review: "How do I hire Wes Anderson to decorate my home?",
      movie_id: 14,
      user_id: 3,
      rating: 4,
    },
    {
      id: 4,
      review:
        "I challenge anyone to watch this film after a bottle of wine and remain dry eyed.",
      movie_id: 18,
      user_id: 4,
      rating: 4,
    },
    {
      id: 5,
      review: "What just happened? Was that Tobey Maguire?",
      movie_id: 19,
      user_id: 5,
      rating: 4,
    },
    {
      id: 6,
      review:
        "I will never work in a professional kitchen. I need a drink after watching that.",
      movie_id: 21,
      user_id: 6,
      rating: 4,
    },
    {
      id: 7,
      review: "And the oscar for most brutal death scene ever goes to...",
      movie_id: 26,
      user_id: 7,
      rating: 4,
    },
    {
      id: 8,
      review: "We demand a Tangerine/Lemon spin off movie.",
      movie_id: 31,
      user_id: 8,
      rating: 4,
    },
    {
      id: 9,
      review:
        "Every zombie movie should have a scene where the characters beat the zombies to death with a pool cue, to the beat of Don't Stop Me Now.",
      movie_id: 1,
      user_id: 9,
      rating: 4,
    },
    {
      id: 10,
      review: "Most quotable movie ever made.",
      movie_id: 2,
      user_id: 10,
      rating: 4,
    },
  ]);
};
