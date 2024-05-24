const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DB_URI,
  ssl: {
    rejectUnauthorized: false,
  },
});

// ======= create tables ==============
const createTables = async () => {
  try {
    await pool.query(`
   CREATE TABLE IF NOT EXISTS rooms (
     id SERIAL PRIMARY KEY,
     name VARCHAR(255) NOT NULL
   );
 `);
  } catch (err) {
    console.log(err);
  }

  try {
    await pool.query(`
     CREATE TABLE IF NOT EXISTS messages (
       id SERIAL PRIMARY KEY,
       room_id INTEGER NOT NULL,
       message_author_name VARCHAR(255),
       message_text VARCHAR(255) NOT NULL,
       timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
   `);
  } catch (err) {
    console.log(err);
  }
};

createTables();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
