exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments();
      tbl.integer("VIN").notNullable().unique();
      tbl.string("Make", 256).notNullable();
      tbl.string("Model", 256).notNullable();
      tbl.integer("Mileage").notNullable();
      tbl.string("Transmission", 256);
      tbl.string("Title_Status", 256);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
