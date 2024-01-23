/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("review", (table) => {
    table.increments("id").primary();
    table.string("review").notNullable();
    table
      .integer("movie_id")
      .unsigned()
      .references("movie.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("user_id")
      .unsigned()
      .references("user.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("review");
};
