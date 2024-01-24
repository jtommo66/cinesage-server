/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("movie_keyword", (table) => {
    table
      .integer("movie_id")
      .unsigned()
      .references("movie.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("keyword_id")
      .unsigned()
      .references("keyword.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("movie_keyword");
};
