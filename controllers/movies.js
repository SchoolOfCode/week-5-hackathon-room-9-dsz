import {
  fetchAllMovies,
  fetchMovieByID,
  insertMovie,
  // modifyMovieById,
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
    const newMovie = await insertMovie(
      movie_name,
      release_date,
      box_office_gross,
      lead_actor,
      director
    );
    console.log("New movie created:", newMovie);

    res.status(201).json({ status: "success", data: newMovie });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
    // throw new Error(`Couldn't add movie to the database!`);
  }
}

const test = await createMovie(
  "Grave of the Fireflies",
  "1988-04-16",
  "516000",
  "Tsutomu Tatsumi",
  "Isao Takahata"
);
