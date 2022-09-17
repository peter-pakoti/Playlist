/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('playlist').del()
  await knex('playlist').insert([
    {
      id: 1,
      songTitle: 'Cyclone',
      artist: 'Sticky Fingers',
      review: 'Such a beautiful song',
    },
    {
      id: 2,
      songTitle: 'Rolling stone',
      artist: 'JMSN',
      review: 'love this sound',
    },
    {
      id: 3,
      songTitle: 'Apparently',
      artist: 'J Cole',
      review: 'such a touching song',
    },
  ])
}
