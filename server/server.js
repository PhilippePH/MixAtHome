const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
const { cocktailRoutes } = require('./routes/cocktailRoutes')
const { inventoryRoutes } = require('./routes/inventoryRoutes')
const { feasibleCocktailsRoutes } = require('./routes/feasibleCocktailRoutes')
const { authRoutes } = require('./routes/jwtAuthRoutes')


app.use(cors())
app.use(express.json()) // for req.body

cocktailRoutes(app)
inventoryRoutes(app)
feasibleCocktailsRoutes(app)
authRoutes(app)

app.listen(5000, () => {
  console.log('Server has started on port 5000')
})