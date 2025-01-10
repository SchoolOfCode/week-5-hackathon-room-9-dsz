// import pool
import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // DROP EXISTING table if they exists
    // try catch
    // await pool.query with the SQL code
    await pool.query(`
      DROP TABLE IF EXISTS movies CASCADE;
      DROP TABLE IF EXISTS reviews CASCADE;
    `);
    console.log("Existing tables dropped");
    
    // Create the movies table
    await pool.query(`
      CREATE TABLE movies (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        movie_name VARCHAR(255),
        release_date DATE,
        box_office_gross NUMERIC,
        lead_actor VARCHAR(255),
        director VARCHAR(255)
      );
    `);
    console.log("Movies table created");

    // Create reviews table
    await pool.query(`
      CREATE TABLE Reviews (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        Name VARCHAR(255),
        Score VARCHAR(10),
        Review VARCHAR(255),
        movies_id INT REFERENCES movies(id)
      );
    `);
    console.log("Reviews table created");

    //Populate movies table
    await pool.query(`
    INSERT INTO movies (movie_name, release_date, box_office_gross, lead_actor, director) VALUES
      ('Amores Perros', '2000-05-19', 20940000, 'Gael García Bernal', 'Alejandro González Iñárritu'),
      ('Birdman', '2014-10-17', 103215094, 'Michael Keaton', 'Alejandro González Iñárritu'),
      ('Little Miss Sunshine', '2006-07-26', 100521607, 'Abigail Breslin', 'Jonathan Dayton, Valerie Faris'),
      ('Match Point', '2005-10-26', 85300000, 'Jonathan Rhys Meyers', 'Woody Allen'),
      ('My Best Friend’s Wedding', '1997-06-20', 299300000, 'Julia Roberts', 'P.J. Hogan'),
      ('The Favourite', '2018-11-23', 95900000, 'Olivia Colman', 'Yorgos Lanthimos'),
      ('Poor Things', '2023-09-08', 45000000, 'Emma Stone', 'Yorgos Lanthimos'),
      ('The Inbetweeners Movie', '2011-08-17', 88300000, 'Simon Bird', 'Ben Palmer'),
      ('Heaven Knows What', '2014-08-29', 70000, 'Arielle Holmes', 'Josh Safdie, Benny Safdie'),
      ('The Thing', '1982-06-25', 19629760, 'Kurt Russell', 'John Carpenter'),
      ('Nosferatu', '1922-03-04', NULL, 'Max Schreck', 'F.W. Murnau');
    `);
    console.log("Movies table populated");

    // Populate reviews table
    await pool.query(`
      INSERT INTO Reviews (Name, Score, Review, movies_id) VALUES
        ('Amores Perros', '92%', 'A gripping triptych that explores the complexities of human relationships through interconnected stories.', 1),
        ('Birdman', '91%', 'A darkly comedic and innovative exploration of an actors struggle with relevance and self-worth.', 2),
        ('Little Miss Sunshine', '91%', 'A heartwarming and quirky family road trip that balances humor with poignant life lessons.', 3),
        ('Match Point', '77%', 'A suspenseful drama delving into themes of luck, ambition, and moral ambiguity in high society.', 4),
        ('My Best Friend’s Wedding', '73%', 'A charming romantic comedy where love and friendship are tested in unexpected ways.', 5),
        ('The Favourite', '93%', 'A wickedly entertaining period piece with sharp wit and outstanding performances.', 6),
        ('Poor Things', '95%', 'A visually stunning and thought-provoking tale that challenges societal norms and expectations.', 7),
        ('The Inbetweeners Movie', '54%', 'A raunchy comedy that extends the TV series'' humor, appealing mainly to its established fanbase.', 8),
        ('Heaven Knows What', '84%', 'A raw and unflinching portrayal of addiction and survival on the streets of New York.', 9),
        ('The Thing', '83%', 'A masterclass in tension and practical effects, this horror film remains chilling decades after release.', 10),
        ('Gattaca', '81%', 'A thought-provoking sci-fi drama that questions the ethics of genetic engineering and destiny.', 11);
    `);
    console.log("Reviews table populated");

  } catch (error) {
    console.log("Error during resetting database: ", error);
  } finally {
    await pool.end();
  }
}

await resetDatabase();
