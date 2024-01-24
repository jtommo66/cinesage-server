/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("movie_genre", (table) => {
    table
      .integer("movie_id")
      .unsigned()
      .references("movie.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("genre_id")
      .unsigned()
      .references("genre.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("movie_genre");
};
