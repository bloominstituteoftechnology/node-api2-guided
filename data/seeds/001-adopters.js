exports.seed = function(knex) {
  return knex('adopters').insert([
    { name: 'ashley', email: 'ashley@ashley.com' },
    { name: 'anwar', email: 'anwar@anwar.com' },
    { name: 'chudi', email: 'chudi@chudi.com' },
    { name: 'dom', email: 'dom@dom.com' },
    { name: 'jie', email: 'jie@jie.com' },
  ]);
}
