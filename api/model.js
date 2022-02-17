const db = require('../data/db-config');

async function getRecipeById(id) {
    const result = await db('recipes as r')
        .leftJoin()
}

module.exports = { getRecipeById };