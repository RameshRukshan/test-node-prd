// src/config/database.js

const { Pool } = require('pg');

// PostgreSQL connection URI
const connectionString = 'postgresql://testposqldb_user:Zg5KDhdGTykTSwg8hBWxiIyyNoBjZGVu@dpg-ct88t80gph6c73d3vhcg-a.singapore-postgres.render.com/testposqldb';

// Create a new pool instance for PostgreSQL
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false // Required for some cloud-based PostgreSQL instances
  }
});

// Function to test the database connection
(async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    process.exit(1); // Exit process if connection fails
  }
})();

module.exports = pool;