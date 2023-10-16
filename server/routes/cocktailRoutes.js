const express = require('express');
const router = express.Router();
const pool = require('../db');


function cocktailRoutes(app) {
  /* COCKTAIL ROUTES */
  // app.post('/cocktails', async (req, res) => {
  //   try{
  //     const {name} = req.body
  //     const newCocktail = await pool.query(
  //       'INSERT INTO cocktails(name) VALUES($1) RETURNING *',
  //       [name]
  //     )
      
  //     res.json(newCocktail.rows[0])
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // })

  // GET LIST OF ALL COCKTAILS
  app.get('/cocktails', async(req, res) => {
    try{
      const allCocktails = await pool.query("SELECT * FROM cocktails")
      res.json(allCocktails.rows)
    } catch (err) {
      console.error(err.message)
    }
  })

  // GET COCKTAIL DETAILS
  app.get('/cocktails/:id', async(req, res) => {
    try{
      const {id} = req.params
      const cocktail = await pool.query(
        `SELECT * 
         FROM cocktails c
         INNER JOIN information i ON c.id = i.cocktail_id
         WHERE id = $1`,
        [id]
      )
      res.json(cocktail.rows[0])
    } catch (err) {
      console.error(err.message)
    }
  })

  // Search a cocktail
  app.get('/cocktails/search/:input', async(req, res) => {
    try{
      const {input} = req.params
      const queryInput = `%${input}%`
      const results = await pool.query(
        `SELECT * 
         FROM cocktails c
         WHERE UPPER(name) LIKE UPPER($1)`,
        [queryInput]
      )
      res.json(results.rows)
    } catch (err) {
      console.error(err.message)
    }
  })

  // app.put("/cocktails/:id", async (req, res) => {
  //   try{
  //     const { id } = req.params
  //     const { name } = req.body
  //     const updateCocktail = await pool.query(
  //       "UPDATE cocktails SET name = $1 WHERE id = $2",
  //       [name, id]
  //       )

  //     res.json("Cocktail name was udpated")
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // })

  // app.delete("/cocktails/:id", async (req, res) => {
  //   try{
  //     const { id } = req.params
  //     const deleteCocktail = await pool.query(
  //       "DELETE FROM cocktails WHERE id = $1",
  //       [id])

  //     res.json("Cocktail was deleted")
  //   } catch (err) {
  //     console.log(err.message)
  //   }
  // })
}

module.exports = { cocktailRoutes }