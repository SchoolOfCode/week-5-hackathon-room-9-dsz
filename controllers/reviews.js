import { fetchAllReviews } from "../models/reviews.js";

export async function getReviews(req, res) {
  try {
    const reviews = await fetchAllReviews();
    res.status(200).json({ status: "success", data: reviews });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
