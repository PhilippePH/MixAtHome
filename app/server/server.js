const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
const { cocktailRoutes } = require('./cocktailRoutes')
const { inventoryRoutes } = require('./inventoryRoutes')
const { feasibleCocktailsRoutes } = require('./feasibleCocktailRoutes')


app.use(cors())
app.use(express.json()) // for req.body

cocktailRoutes(app)
inventoryRoutes(app)
feasibleCocktailsRoutes(app)

app.listen(5000, () => {
  console.log('Server has started on port 5000')
})