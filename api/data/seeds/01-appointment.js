/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex("appointment").insert([
    {
      id: 1,
      text: "Test 1",
      startDate: "2022-04-01T16:30:00.000Z",
      endDate: "2022-04-01T16:30:00.000Z",
      description: "Test Description",
      allDay: false,
    },
    {
      text: 'Website Re-Design Plan',
      startDate: new Date('2022-04-26T16:30:00.000Z'),
      endDate: new Date('2022-04-26T18:30:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Book Flights to San Fran for Sales Trip',
      startDate: new Date('2022-04-26T19:00:00.000Z'),
      endDate: new Date('2022-04-26T20:00:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Install New Router in Dev Room',
      startDate: new Date('2022-04-26T21:30:00.000Z'),
      endDate: new Date('2022-04-26T22:30:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Approve Personal Computer Upgrade Plan',
      startDate: new Date('2022-04-27T17:00:00.000Z'),
      endDate: new Date('2022-04-27T18:00:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Final Budget Review',
      startDate: new Date('2022-04-27T19:00:00.000Z'),
      endDate: new Date('2022-04-27T20:35:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'New Brochures',
      startDate: new Date('2022-04-27T21:30:00.000Z'),
      endDate: new Date('2022-04-27T22:45:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Install New Database',
      startDate: new Date('2022-04-28T16:45:00.000Z'),
      endDate: new Date('2022-04-28T18:15:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Approve New Online Marketing Strategy',
      startDate: new Date('2022-04-28T19:00:00.000Z'),
      endDate: new Date('2022-04-28T21:00:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Upgrade Personal Computers',
      startDate: new Date('2022-04-28T22:15:00.000Z'),
      endDate: new Date('2022-04-28T23:30:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Customer Workshop',
      startDate: new Date('2022-04-29T18:00:00.000Z'),
      endDate: new Date('2022-04-29T19:00:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Prepare 2022 Marketing Plan',
      startDate: new Date('2022-04-29T18:00:00.000Z'),
      endDate: new Date('2022-04-29T20:30:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Brochure Design Review',
      startDate: new Date('2022-04-29T21:00:00.000Z'),
      endDate: new Date('2022-04-29T22:30:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Create Icons for Website',
      startDate: new Date('2022-04-30T17:00:00.000Z'),
      endDate: new Date('2022-04-30T18:30:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Upgrade Server Hardware',
      startDate: new Date('2022-04-30T21:30:00.000Z'),
      endDate: new Date('2022-04-30T23:00:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Submit New Website Design',
      startDate: new Date('2022-04-30T23:30:00.000Z'),
      endDate: new Date('2022-05-01T01:00:00.000Z'),
      description: "Test Description",
      allDay: false,
    }, {
      text: 'Launch New Website',
      startDate: new Date('2022-04-30T19:20:00.000Z'),
      endDate: new Date('2022-04-30T21:00:00.000Z'),
      description: "Test Description",
      allDay: false,
    },
  ])
};
