import { pool } from "../db/index.js";

// Fetch all data
export async function fetchAllReviews() {
  try {
    const query = "SELECT * FROM reviews";
    const allReviews = await pool.query(query);
    return allReviews.rows;
  } catch (error) {
    console.error("Error!", error);
  }
}

// Fetch data by ID
  // try catch
  // write query
  // call pool.query with query parameter
  // return query
  // error handle
export async function fetchReviewByID(id) {
  try {
    const query = "SELECT * FROM reviews WHERE id=$1";
    const values = [id];
    const review = await pool.query(query, values);
    return review.rows[0];
  } catch (error) {
    console.error(`Failed to fetch review with id ${id}:`, error.message);
    throw new Error(`No review found with id: ${id}`);
  }
}

// Create a new review and send to database
  // try catch
  // query = send review in SQL AKA INSERT
  // call pool.query with query parameter
  // return query
  // error handle
export async function insertReview(newReviewData) {
  try {
    const { review_name, release_date, box_office_gross, lead_actor, director } =
      newReviewData;
    const query =
      "INSERT INTO reviews (review_name, release_date, box_office_gross, lead_actor, director) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [
      review_name,
      release_date,
      box_office_gross,
      lead_actor,
      director,
    ];
    const insertedReview = await pool.query(query, values);
    return insertedReview.rows[0];
  } catch (error) {
    console.error(`Failed to create new review ${newReview}:`, error.message);
    throw new Error(`No review found with id: ${newReview}`);
  }
}

// Update a review by ID
  // try catch
  // get id
  // get body with new values
  // query = UPDATE elements
  // call pool.query with query parameters
  // return updated review details
  // error handle
export async function modifyReviewByID(id, updates) {
  try {
    const { review_name, release_date, box_office_gross, lead_actor, director } =
      updates;
    const query = `UPDATE reviews SET
    review_name=$2,
    release_date=$3,
    box_office_gross=$4,
    lead_actor=$5,
    director=$6
    WHERE id = $1
    RETURNING *`;
    const values = [
      id,
      review_name,
      release_date,
      box_office_gross,
      lead_actor,
      director,
    ];
    const review = await pool.query(query, values);
    return review.rows[0];
  } catch (error) {
    console.error(`Failed to fetch review with id ${id}:`, error.message);
    throw new Error(`No review found with id: ${id}`);
  }
}

// Delete review by ID
  // try catch
  // query = DELETE SQL statement
  // get id and save to values
  // call pool.query with query parameters
  // return delted valued to verify
  // error handle
export async function removeReviewById(id) {
  try {
    const query = "DELETE FROM reviews WHERE id=$1 RETURNING *";
    const values = [id];
    const deletedReview = await pool.query(query, values);
    if (deletedReview.rowCount === 0) {
      // If no rows were deleted, throw a custom error
      throw new Error(`No review found with id: ${id}`);
    }

    console.log(`Review with id ${id} deleted successfully.`);
    return deletedReview.rows[0];
  } catch (error) {
    console.error(`Failed to delete review with id ${id}:`, error.message);
    throw new Error(`No review found with id: ${id}`);
  }
}
