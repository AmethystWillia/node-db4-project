const db = require('../data/db-config');

async function getRecipeById(id) {
    const result = await db('recipes as r')
        .leftJoin('steps as s', 's.recipe_id', 'r.recipe_id')
        .select('r.recipe_id', 'r.recipe_name', 's.step_number', 's.step_instructions')
        .where('r.recipe_id', id);

    return result;
}

module.exports = { getRecipeById };