exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.string('recipe_name').notNullable().unique();
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id');
        tbl.integer('step_number').notNullable();
        tbl.string('instructions').notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id').inTable('recipes');
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.string('ingredient_name', 120).notNullable();
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id').inTable('steps');
    })
    .createTable('steps_ingredients', tbl => {
        tbl.primary(['step_id', 'ingredient_id']);
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id').inTable('steps');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id').inTable('ingredients');
        tbl.string('ingredient_quantity').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps_ingredients');
};
