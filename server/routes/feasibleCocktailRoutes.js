const express = require('express');
const router = express.Router();
const pool = require('../db');


function feasibleCocktailsRoutes(app) {
  /* COCKTAIL ROUTES */
  app.get('/feasible_cocktails', async(req, res) => {
    try{
      const allCocktails = await pool.query(`
        SELECT c.id, c.name
        FROM cocktails c
        INNER JOIN recipe r ON c.id = r.cocktail_id
        LEFT JOIN inventory i ON r.ingredient_id = i.id
        WHERE NOT EXISTS (
            SELECT 1
            FROM recipe r2
            LEFT JOIN inventory i2 ON r2.ingredient_id = i2.id
            WHERE r2.cocktail_id = c.id
            AND i2.in_stock = false
        )
        GROUP BY c.id, c.name;
        `)// double check if this format works for queries

      res.json(allCocktails.rows)
    } catch (err) {
      console.error(err.message)
    }
  })
}

module.exports = { feasibleCocktailsRoutes }