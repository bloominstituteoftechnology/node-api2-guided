exports.seed = function(knex) {
  return knex('adopters').insert([
    { name: 'Katherine', email: 'kat@bloomtech.com' },
    { name: 'Felipe', email: 'felipe@bloomtech.com' },
    { name: 'Wailon', email: 'wailon@bloomtech.com' },
    { name: 'Raj', email: 'raj@bloomtech.com' },
    { name: 'Priscila', email: 'priscila@bloomtech.com' },
  ]);
}
