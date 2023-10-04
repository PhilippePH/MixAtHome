const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
const { cocktailRoutes } = require('./cocktailRoutes')
const { inventoryRoutes } = require('./inventoryRoutes')


app.use(cors())
app.use(express.json()) // for req.body

cocktailRoutes(app)
inventoryRoutes(app)

app.listen(5000, () => {
  console.log('Server has started on port 5000')
})