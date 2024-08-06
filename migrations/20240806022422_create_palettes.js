/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("palettes", function(table) {
    table.increments("id")
    table.string("rgb0",11).notNullable();
    table.string("rgb1",11).notNullable();
    table.string("rgb2",11).notNullable();
    table.string("rgb3",11).notNullable();
    table.string("rgb4",11).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("palettes")
};
