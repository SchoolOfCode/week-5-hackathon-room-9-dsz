import {
  fetchAllMovies,
  fetchMovieByID,
  // insertMovie,
  modifyMovieByID,
  // removeMovieById,
} from "../models/movies.js";

// Get all movies
export async function getMovies(req, res) {
  try {
    const movies = await fetchAllMovies();
    res.status(200).json({ status: "success", data: movies });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

// Get movie by ID
export async function getMovieByID(req, res) {
  try {
    const id = req.params.id;
    const movie = await fetchMovieByID(id);
    if (!movie) {
      return res
        .status(404)
        .json({ status: "fail", message: "Movie not found" });
    }
    res.status(200).json({ status: "success", data: movie });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
    throw new Error(`No movie found with ID: ${id}`);
  }
}

// Create movie

// Update movie
export async function updateMovieByID(req, res) {
  try {
    const { id } = req.params;
    const movie = await modifyMovieByID(id, req.body);
    if (!movie) {
      return res
        .status(404)
        .json({ status: "fail", message: "Movie not found" });
    }
    res.status(200).json({ status: "success", data: movie });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
    throw new Error(`No movie found with ID: ${id}`);
  }
}
