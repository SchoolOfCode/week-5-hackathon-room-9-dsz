import {
  fetchAllMovies,
  fetchMovieByID,
  insertMovie,
  modifyMovieByID,
  removeMovieById,
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

// Insert new movie
export async function createMovie(req, res) {
  try {
    const { movie_name, release_date, box_office_gross, lead_actor, director } =
      req.body;
    if (
      !movie_name ||
      !release_date ||
      !box_office_gross ||
      !lead_actor ||
      !director
    ) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const newMovieData = {
      movie_name,
      release_date,
      box_office_gross,
      lead_actor,
      director,
    };
    const newMovie = await insertMovie(newMovieData);
    console.log("New movie created:", newMovie);

    res.status(201).json({ status: "success", data: newMovie });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: `ERROR: ${error.message}` });
    throw new Error(`Couldn't add movie to the database!`);
  }
}

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

// Delete movie
  // decalare function and try catch block
  // extract is from req.params
  // call with appropraite function and id
  // check if functionr etunr obj and error handle
  // successful response
  // catch error
export async function deleteMovieByID(req, res) {
  try {
    const id = req.params.id;
    const result = await removeMovieById(id);
    if (!result) {
      res.status(404).json({ status: "fail", message: "Movie not found" });
    }
    res.status(204).json({ status: "success", data: result });
  } catch (error) {
    console.error(
      `Failed to delete movie with ID ${req.params.id}:`,
      error.message
    );
    return res
      .status(500)
      .json({ status: "error", message: `ERROR: ${error.message}` });
  }
}
