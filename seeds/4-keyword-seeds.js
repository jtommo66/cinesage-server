/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("keyword").del();
  await knex("keyword").insert([
    {
      id: 1,
      keyword: "Zombies",
    },
    {
      id: 2,
      keyword: "Funny",
    },
    {
      id: 3,
      keyword: "Gory",
    },
    {
      id: 4,
      keyword: "Crude",
    },
    {
      id: 5,
      keyword: "Teen",
    },
    {
      id: 6,
      keyword: "Satire",
    },
    {
      id: 7,
      keyword: "Slapstick",
    },
    {
      id: 8,
      keyword: "Heist",
    },
    {
      id: 9,
      keyword: "Gritty",
    },
    {
      id: 10,
      keyword: "Betrayal",
    },
    {
      id: 11,
      keyword: "Assassin",
    },
    {
      id: 12,
      keyword: "Swords",
    },
    {
      id: 13,
      keyword: "Epic",
    },
    {
      id: 14,
      keyword: "Magic",
    },
    {
      id: 15,
      keyword: "Suspense",
    },
    {
      id: 16,
      keyword: "Murder",
    },
    {
      id: 17,
      keyword: "Violent",
    },
    {
      id: 18,
      keyword: "Intense",
    },
    {
      id: 19,
      keyword: "Witty",
    },
    {
      id: 20,
      keyword: "Charming",
    },
    {
      id: 21,
      keyword: "Animated",
    },
    {
      id: 22,
      keyword: "Quirky",
    },
    {
      id: 23,
      keyword: "Animals",
    },
    {
      id: 24,
      keyword: "Food",
    },
    {
      id: 25,
      keyword: "Marvel",
    },
    {
      id: 26,
      keyword: "Superhero",
    },
    {
      id: 27,
      keyword: "Revenge",
    },
    {
      id: 28,
      keyword: "Emotional",
    },
    {
      id: 29,
      keyword: "Underdogs",
    },
    {
      id: 30,
      keyword: "True Story",
    },
    {
      id: 31,
      keyword: "Disney",
    },
    {
      id: 32,
      keyword: "Pixar",
    },
    {
      id: 33,
      keyword: "Gangster",
    },
    {
      id: 34,
      keyword: "Historical",
    },
    {
      id: 35,
      keyword: "Adorable",
    },
    {
      id: 36,
      keyword: "Relationships",
    },
    {
      id: 37,
      keyword: "Music",
    },
    {
      id: 38,
      keyword: "Gripping",
    },
    {
      id: 39,
      keyword: "Futuristic",
    },
    {
      id: 40,
      keyword: "Scary",
    },
  ]);
};
