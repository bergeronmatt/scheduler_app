/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
      .createTable('user', t => {
          t.increments();
          t.string("firstName", 128);
          t.string("lastName", 128);
          t.string("email", 128).unique();
          t.string("password", 128)
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