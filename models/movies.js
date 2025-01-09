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

// fetch data by ID
// try catch
// write query
// call pool.query with query parameter
// return query
// error handle

export async function fetchMovieByID(id) {
  try {
    const query = "SELECT * FROM movies WHERE id=$1";
    const values = [id];
    const movie = await pool.query(query, values);
    return movie.rows;
  } catch (error) {
    console.error(`Failed to fetch movie with id ${id}:`, error.message);
    throw new Error(`No movie found with id: ${id}`);
  }
}

// create a new movie and send to database
// try catch
// query = send movie in SQL AKA INSERT
// call pool.query with query parameter
// return query
// error handle
export async function insertMovie(
  movie_name,
  release_date,
  box_office_gross,
  lead_actor,
  director
) {
  try {
    const query =
      "INSERT INTO movies (movie_name, release_date, box_office_gross, lead_actor, director) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [
      movie_name,
      release_date,
      box_office_gross,
      lead_actor,
      director,
    ];
    const createdMovie = pool.query(query, values);
    return createdMovie.rows;
  } catch (error) {
    console.error(`Failed to create new movie ${newMovie}:`, error.message);
    throw new Error(`No movie found with id: ${newMovie}`);
  }
}
