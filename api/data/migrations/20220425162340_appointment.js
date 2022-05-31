/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('appointment', t => {
        t.increments();
        t.string("text");
        t.dateTime("startDate");
        t.dateTime("endDate");
        t.string('description');
        t.boolean('allDay');
        t.boolean('status');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("appointment")
};
