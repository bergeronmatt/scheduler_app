/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex("appointment").insert([
    {
      id: 1,
      subject: "Test 1",
      startDate: "2022-04-01T16:30:00.000Z",
      endDate: "2022-04-01T16:30:00.000Z"
    }
  ])
};
