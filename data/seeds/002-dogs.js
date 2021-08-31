exports.seed = function (knex) {
  return knex('dogs').insert([
    {
      name: 'fido',
      weight: 25,
      adopter_id: 1,
    },
    {
      name: 'buddy',
      weight: 15,
      adopter_id: 1,
    },
    {
      name: 'odin',
      weight: 18,
      adopter_id: 2,
    },
    {
      name: 'chip',
      weight: 35,
      adopter_id: null,
    },
    {
      name: 'peanut',
      weight: 25,
      adopter_id: null,
    },
  ]);
};
