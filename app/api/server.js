const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

app.use(cors())
app.use(express.json()) // for req.body

// Routes

// Create a cocktail
app.post('/cocktails', async (req, res) => {
  try{
    const {name} = req.body
    const newCocktail = await pool.query(
      'INSERT INTO cocktail_list(name) VALUES($1) RETURNING *',
      [name]
    )
     
    res.json(newCocktail.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

app.get('/cocktails', async(req, res) => {
  try{
    const allCocktails = await pool.query("SELECT * FROM cocktail_list")
    res.json(allCocktails.rows)
  } catch (err) {
    console.error(err.message)
  }
})

app.get('/cocktails/:id', async(req, res) => {
  try{
    const {id} = req.params
    const cocktail = await pool.query(
      "SELECT * FROM cocktail_list WHERE id = $1",
      [id]
    )
    res.json(cocktail.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})


app.put("/cocktails/:id", async (req, res) => {
  try{
    const { id } = req.params
    const { name } = req.body
    const updateCocktail = await pool.query(
      "UPDATE cocktail_list SET name = $1 WHERE id = $2",
      [name, id]
      )

    res.json("Cocktail name was udpated")
  } catch (err) {
    console.error(err.message)
  }
})


app.delete("/cocktails/:id", async (req, res) => {
  try{
    const { id } = req.params
    const deleteCocktail = await pool.query(
      "DELETE FROM cocktail_list WHERE id = $1",
      [id])

    res.json("Cocktail was deleted")
  } catch (err) {
    console.log(err.message)
  }
})

app.listen(5000, () => {
  console.log('Server has started on port 5000')
})