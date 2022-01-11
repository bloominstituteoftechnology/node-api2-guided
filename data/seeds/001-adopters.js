exports.seed = function(knex) {
  return knex('adopters').insert([
    { name: 'Roberto', email: 'roberto@bloomtech.com' },
    { name: 'Anastasia', email: 'anastasia@bloomtech.com' },
    { name: 'Areccus', email: 'areccus@bloomtech.com' },
    { name: 'Danielle', email: 'danielle@bloomtech.com' },
    { name: 'William', email: 'william@bloomtech.com' },
  ]);
}
