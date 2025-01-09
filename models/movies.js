import { pool } from "../db/index.js";

// fetch all data

export async function fetchAllMovies() {
  try {
    const query = "SELECT * FROM movies";
    const allMovies = await pool.query(query);
    return allMovies.rows;
  } catch (error) {
    console.error("Error!", error);
  }
}
