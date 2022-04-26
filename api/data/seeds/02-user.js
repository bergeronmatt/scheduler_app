/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  return knex("user").insert([
    {
      id: 1,
      firstName: "Matt",
      lastName: "Bergeron",
      email: "mbergeron@comresource.com",
      password: "$2a$09$dImLdSFY6OY/81TxQB.RtuECV1rropPkDbP0GhWoGh9kPOXuz2Tsu"
    }
  ])
};
