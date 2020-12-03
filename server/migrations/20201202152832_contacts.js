exports.up = function (knex) {
  return knex.schema.createTable("contacts", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("company").notNullable();
    table.string("position").notNullable();
    table.string("email").notNullable();
    table.integer("projects_id").unsigned().notNullable();
    table.string("phone").notNullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("contacts");
};
