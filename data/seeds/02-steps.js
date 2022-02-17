
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, instructions: 'Remove fillets and hashbrowns from freezer', recipe_id: 1},
        {step_number: 2, instructions: 'Preheat oven to 450', recipe_id: 1},
        {step_number: 3, instructions: 'Put fillets and hashbrown in for 8 minutes', recipe_id: 1},
        {step_number: 4, instructions: 'Flip fillets and hashbrown, cook another 8 minutes', recipe_id: 1},
        {step_number: 5, instructions: 'Salt to taste', recipe_id: 1},
        {step_number: 1, instructions: 'Acquire bread', recipe_id: 2},
        {step_number: 2, instructions: 'Put in toaster', recipe_id: 2},
        {step_number: 3, instructions: 'Be patient', recipe_id: 2},
      ]);
    });
};
