const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: 'I@mastrongpsswd',
  host: '127.0.0.1',
  port: '5432',
  database: 'cocktails'
})

module.exports = pool