# Boundary Value Analysis (BVA) and Equivalence Partitioning (EP)

- are both test design techniques used to identify test cases based on input boundaries or valid/invalid categories.

# Equivalance Partitioning (EP)

- divides up the input data into equivalent classes or partitions, where any value in the class/partition is treated the same way.

# Boundary Value Analysis (BVA)

# CASE 'fetchAllMovies':

- Valid case (expected behaviour):

  - The API should return all movies in the database.
    Class 1: The query returns one or more movies in a valid format (array of objects). This is the "happy path" scenario where the query returns results in the correct structure.

- Empty result (valid but edge case):
  - The API should return an empty array if there are no movies in the database.
    Class 2: The query returns no movies, which results in result.rows being an empty array. This is still valid, but it tests how yout fucntion handles the case where there are no entried in the database.
