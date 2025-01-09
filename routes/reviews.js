import express from "express";
import {
    getReviews,
    getReviewByID,
    createReview,
    updateReviewByID,
    deleteReviewByID,
} from "../controllers/reviews.js";

const router = express.Router();

router.get("/", getReviews);
router.get("/:id", getReviewByID);
router.post("/", createReview);
router.patch("/:id", updateReviewByID);
router.delete("/:id", deleteReviewByID);

export default router;
