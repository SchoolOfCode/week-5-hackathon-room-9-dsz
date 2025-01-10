import {
  fetchAllReviews,
  fetchReviewByID,
  insertReview,
  modifyReviewByID,
  removeReviewById,
  // removeReviewById,
} from "../models/reviews.js";

// Get all reviews
export async function getReviews(req, res) {
  try {
    const reviews = await fetchAllReviews();
    res.status(200).json({ status: "success", data: reviews });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

// Get review by ID
export async function getReviewByID(req, res) {
  try {
    const id = req.params.id;
    const review = await fetchReviewByID(id);
    if (!review) {
      return res
        .status(404)
        .json({ status: "fail", message: "Review not found" });
    }
    res.status(200).json({ status: "success", data: review });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
    throw new Error(`No review found with ID: ${id}`);
  }
}

// Insert new review
export async function createReview(req, res) {
  try {
    const { name, score, review, movies_id } =
      req.body;
    if (
      !name ||
      !score ||
      !review ||
      !movies_id
    ) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const newReviewData = {
      name,
      score,
      review,
      movies_id,
    };
    const newReview = await insertReview(newReviewData);
    console.log("New review created:", newReview);

    res.status(201).json({ status: "success", data: newReview });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: `ERROR: ${error.message}` });
    throw new Error(`Couldn't add review to the database!`);
  }
}

// Update review
export async function updateReviewByID(req, res) {
  try {
    const { id } = req.params;
    const review = await modifyReviewByID(id, req.body);
    if (!review) {
      return res
        .status(404)
        .json({ status: "fail", message: "Review not found" });
    }
    res.status(200).json({ status: "success", data: review });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
    throw new Error(`No review found with ID: ${id}`);
  }
}

// Delete review
  // decalare function and try catch block
  // extract is from req.params
  // call with appropraite function and id
  // check if functionr etunr obj and error handle
  // successful response
  // catch error
export async function deleteReviewByID(req, res) {
  try {
    const id = req.params.id;
    const result = await removeReviewById(id);
    if (!result) {
      res.status(404).json({ status: "fail", message: "Review not found" });
    }
    res.status(204).json({ status: "success", data: result });
  } catch (error) {
    console.error(
      `Failed to delete review with ID ${req.params.id}:`,
      error.message
    );
    return res
      .status(500)
      .json({ status: "error", message: `ERROR: ${error.message}` });
  }
}
