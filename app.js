// Import packages
import express from "express";
import morgan from "morgan";

// Import routes
import moviesRouter from "./routes/movies.js";
import reviewsRouter from "./routes/reviews.js";

// Testing new style environment variable call
console.log(`port we're looking for: ${process.env.PORT}`);

// Initialize the express app
const app = express();

// Middlewares
// for logging HTTP requests to the console in a developer-friendly format
app.use(morgan("dev"));
// for  parsing incoming JSON requests
app.use(express.json());

// Use sub-routers
app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);

export default app;
