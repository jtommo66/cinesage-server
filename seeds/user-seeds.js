/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("table_name").del();
  await knex("table_name").insert([
    {
      id: 1,
      name: "Seraphina Monroe",
      email: "smonroe@gmail.com",
      password: "password",
    },
    {
      id: 2,
      name: "Jasper Hawthorne",
      email: "jhawthorne@gmail.com",
      password: "password",
    },
    {
      id: 3,
      name: "Elara Donovan",
      email: "edonovan@gmail.com",
      password: "password",
    },
    {
      id: 4,
      name: "Orion Blackwell",
      email: "oblackwell@gmail.com",
      password: "password",
    },
    {
      id: 5,
      name: "Isabella Sterling",
      email: "isterling@gmail.com",
      password: "password",
    },
    {
      id: 6,
      name: "Silas Evergreen",
      email: "severgreen@gmail.com",
      password: "password",
    },
    {
      id: 7,
      name: "Luna Castillo",
      email: "lcastillo@gmail.com",
      password: "password",
    },
    {
      id: 8,
      name: "Finnian Wilde",
      email: "fwilde@gmail.com",
      password: "password",
    },
    {
      id: 9,
      name: "Penelope Quinn",
      email: "pquinn@gmail.com",
      password: "password",
    },
    {
      id: 10,
      name: "Xavier Mercer",
      email: "xmercer@gmail.com",
      password: "password",
    },
  ]);
};
