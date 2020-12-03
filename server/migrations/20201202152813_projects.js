exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("streetNumber").notNullable();
    table.string("streetName").notNullable();
    table.string("city").notNullable();
    table.string("province").notNullable();
    table.string("postalCode").notNullable();
    table.string("contact").notNullable();
    table.string("images").notNullable();
    table.string("startDate").notNullable();
    table.string("endDate").notNullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
