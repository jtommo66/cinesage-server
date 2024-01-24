/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("movie", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("image").notNullable();
    table.string("trailer").notNullable();
    table.string("synopsis").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("movie");
};
