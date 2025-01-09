import express from "express";
import {
    getMovies,
    getMovieByID,
    createMovie,
    updateMovieByID,
    deleteMovieByID,
} from "../controllers/movies.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovieByID);
router.post("/", createMovie);
router.patch("/:id", updateMovieByID);
router.delete("/:id", deleteMovieByID);

export default router;
