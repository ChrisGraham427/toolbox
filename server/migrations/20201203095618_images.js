exports.up = function (knex) {
  return knex.schema.createTable("images", (table) => {
    table.increments("id").primary();
    table.string("source").notNullable();
    table.string("description").notNullable();
    table.string("alt").notNullable();
    table
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("images");
};
