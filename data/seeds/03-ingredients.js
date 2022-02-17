
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Fishless fillets', step_id: 1},
        {ingredient_name: 'Hashbrowns', step_id: 1},
        {ingredient_name: 'Bread slice', step_id: 6},
      ]);
    });
};
