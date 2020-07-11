exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'teste', password: '12345'},
        {email: 'teste', password: '12345'},
        {email: 'teste', password: '12345'}
      ]);
    });
};
