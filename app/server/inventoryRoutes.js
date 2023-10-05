const express = require('express');
const router = express.Router();
const pool = require('./db');


function inventoryRoutes(app) {
  /* COCKTAIL ROUTES */
  // app.post('/inventory', async (req, res) => {
  //   try{
  //     const {name} = req.body
  //     const newCocktail = await pool.query(
  //       'INSERT INTO inventory(name) VALUES($1) RETURNING *',
  //       [name]
  //     )
      
  //     res.json(newCocktail.rows[0])
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // })
  
  app.get('http://localhost:5000/inventory/instock', async(req, res) => {
    try{
      const allIngredients = await pool.query("SELECT * FROM inventory WHERE in_stock = TRUE ORDER BY name")
      res.json(allIngredients.rows)
    } catch (err) {
      console.error(err.message)
    }
  })

  app.get('http://localhost:5000/inventory/no-stock', async(req, res) => {
    try{
      const allIngredients = await pool.query("SELECT * FROM inventory WHERE in_stock = FALSE ORDER BY name")
      res.json(allIngredients.rows)
    } catch (err) {
      console.error(err.message)
    }
  })

  // app.get('/inventory/:id', async(req, res) => {
  //   try{
  //     const {id} = req.params
  //     const cocktail = await pool.query(
  //       "SELECT * FROM inventory WHERE id = $1",
  //       [id]
  //     )
  //     res.json(cocktail.rows[0])
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // })


  app.put("/inventory/:id", async (req, res) => {
    try{
      const { id } = req.params
      const { in_stock } = req.body
      const new_value = ! in_stock
      
      const updateCocktail = await pool.query(
        "UPDATE inventory SET in_stock = $1 WHERE id = $2",
        [new_value, id]
        )

      res.json("Inventory stock was udpated")
    } catch (err) {
      console.error(err.message)
    }
  })
}

module.exports = { inventoryRoutes }