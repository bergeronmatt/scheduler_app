/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const today = new Date();
const expire = today + 7 * 24 * 60 * 60 * 1000;

exports.seed = function (knex) {
  return knex('appointment').insert([
    {
      text: 'Pending Appointment',
      startDate: today,
      endDate: expire,
      description:
        'This is seed data to help the initial run of the database. You can delete this appointment.',
      allDay: false,
      status: 0,
    },
    {
      text: 'Completed Appointment',
      startDate: today,
      endDate: expire,
      description:
        'This is seed data to help the initial run of the database. You can delete this appointment.',
      allDay: false,
      status: 1,
    },
  ]);
};
