exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("category").notNullable();
    table.string("task").notNullable();
    table.string("description").notNullable();

    table.integer("project_id").unsigned().notNullable();

    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("contacts");
};
