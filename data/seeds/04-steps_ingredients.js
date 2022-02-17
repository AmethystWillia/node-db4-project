
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps_ingredients').insert([
        {step_id: 1, ingredient_id: 1, ingredient_quantity: '3 fillet'},
        {step_id: 1, ingredient_id: 2, ingredient_quantity: '1 hashbrown patty'},
        {step_id: 6, ingredient_id: 3, ingredient_quantity: '1 slice'},
      ]);
    });
};
