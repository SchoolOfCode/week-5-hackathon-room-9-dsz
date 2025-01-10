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
    return movie.rows[0];
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

// export async function createNewMovie() {
//   try {
//     const query =
//       "INSERT INTO movies (id, movie_name, release_date, box_office_gross, lead_actor, director) VALUES ($1, $2, $3, $4, $5) RETURNING *";
//     const values = [
//       movie_name,
//       release_date,
//       box_office_gross,
//       lead_actor,
//       director,
//     ];
//     const createdMovie = pool.query(query, values);
//     return createdMovie.rows;
//   } catch (error) {
//     console.error(`Failed to create new movie ${newMovie}:`, error.message);
//     throw new Error(`No movie found with id: ${newMovie}`);
//   }
// }

// update a movie by ID
  // try catch
  // get id
  // get body with new values
  // query = UPDATE elements
  // call pool.query with query parameters
  // return updated movie details
  // error handle
export async function modifyMovieByID(id, updates) {
  try {
    const {
      movie_name,
      release_date,
      box_office_gross,
      lead_actor,
      director
    } = updates;
    const query = `UPDATE movies SET
    movie_name=$2,
    release_date=$3,
    box_office_gross=$4,
    lead_actor=$5,
    director=$6
    WHERE id = $1
    RETURNING *`;
    const values = [id,
      movie_name,
      release_date,
      box_office_gross,
      lead_actor,
      director
    ];
    const movie = await pool.query(query, values);
    return movie.rows[0];
  } catch (error) {
    console.error(`Failed to fetch movie with id ${id}:`, error.message);
    throw new Error(`No movie found with id: ${id}`);
  }
}
