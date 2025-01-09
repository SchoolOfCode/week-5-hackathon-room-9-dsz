// import
import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // DROP EXISTING table if they exists
    // try catch
    // await poo.pery with the SQL code
    pool.query(`
    DROP TABLE IF EXISTS actors CASCADE;
    DROP TABLE IF EXISTS movies CASCADE;`);

    // Create the movies table
    await pool.query(`
      CREATE TABLE movies (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL
      );
    `);
  } catch (error) {}

  pool.query();

  // Create the authors table
  // Create the books table with a foreign key to the authors table
  // Seed the authors table
  // Seed the books table
}
