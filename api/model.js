const db = require('../data/db-config');

async function getRecipeById(id) {
    const result = await db('recipes as r')
        .leftJoin('steps as s', 's.recipe_id', 'r.recipe_id')
        .
}

module.exports = { getRecipeById };