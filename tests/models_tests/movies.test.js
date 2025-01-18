import { describe, test, expect, assert } from "vitest";
import { fetchAllMovies } from "../../models/movies";
import { pool } from "../../db/index.js";

describe("fetchAllMovies", () => {
  test("SQL command returns a JSON object", async () => {
    //arrange
    const query = "SELECT * FROM movies";
    //act
    const result = await pool.query(query);
    console.log("Hello:", result);
    //assert
    // Assert
    expect(Array.isArray(result.rows)).toBe(true);
    expect(result.rows).toBeDefined();
  });
});
