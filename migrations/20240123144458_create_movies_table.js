/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("movie", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("image").notNullable();
    table
      .integer("director_id")
      .unsigned()
      .references("director.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("genre_id")
      .unsigned()
      .references("genre.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("keyword_id")
      .unsigned()
      .references("keyword.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("trailer").notNullable();
    table.string("synopsis").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("movies");
};
