const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'expense_tracker_db',
    password: '9877',
    port: 5432
})

module.exports = pool;