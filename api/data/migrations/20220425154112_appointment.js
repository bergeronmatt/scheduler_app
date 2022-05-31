/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('appointment', (t) => {
        t.increments()
        t.string('text', 128).notNullable()
        t.dateTime("starDate").notNullable()
        t.dateTime('endDate').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("appointment")
}
