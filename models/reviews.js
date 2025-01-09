import { pool } from "../db/index.js";

// fetch all data

export async function fetchAllReviews() {
    try {
        const query = "SELECT * FROM reviews";
        const allReviews = await pool.query(query);
        return allReviews.rows;
    } catch (error) {
        console.error("Error!", error);
    }
}