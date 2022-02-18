const express = require('express');
const Recipe = require('./model');

const router = express.Router();

router.get('/id', (req, res, next) => {
    const { id } = req.params;

    Recipe.getRecipeById(id)
        .then(recipe => {
            res.json(recipe);
        })
        .catch(err => {
            next(err);
        })
});

module.exports = router;