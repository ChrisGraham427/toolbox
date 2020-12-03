exports.up = function (knex) {
  return knex.schema.createTable("images", (table) => {
    table.increments("id").primary();
    table.string("source").notNullable();
    table.string("description").notNullable();
    table.string("alt").notNullable();
    table.integer("projects_id").unsigned().notNullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("images");
};
