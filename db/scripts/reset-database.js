// import
import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // DROP EXISTING table if they exists
    // try catch
    // await poo.pery with the SQL code
    pool.query(`
    DROP TABLE IF EXISTS actors CASCADE;
    DROP TABLE IF EXISTS movies CASCADE;`);

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


    //populate movies table
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
('Gattaca', '1997-10-24', 12532477, 'Ethan Hawke', 'Andrew Niccol'),
('Watchmen (Directors Cut)', '2009-03-06', 185258983, 'Jackie Earle Haley', 'Zack Snyder'),
('Office Space', '1999-02-19', 12827813, 'Ron Livingston', 'Mike Judge'),
('Platoon', '1986-12-19', 138530565, 'Charlie Sheen', 'Oliver Stone'),
('Waking Life', '2001-10-19', 3119246, 'Wiley Wiggins', 'Richard Linklater'),
('Mulholland Drive', '2001-10-12', 20147376, 'Naomi Watts', 'David Lynch'),
('No Hard Feelings', '2023-06-23', 86900000, 'Jennifer Lawrence', 'Gene Stupnitsky'),
('The Game', '1997-09-12', 109423648, 'Michael Douglas', 'David Fincher'),
('This Is The End', '2013-06-12', 126041322, 'James Franco', 'Seth Rogen, Evan Goldberg'),
('Dune', '2021-10-22', 400671789, 'Timothée Chalamet', 'Denis Villeneuve'),
('Apollo 11', '2019-03-01', 15600000, 'Buzz Aldrin', 'Todd Douglas Miller'),
('Átame!', '1990-01-12', 3860000, 'Victoria Abril', 'Pedro Almodóvar'),
('Dune 2', '2023-11-03', NULL, 'Timothée Chalamet', 'Denis Villeneuve'),
('Primer', '2004-10-08', 545436, 'Shane Carruth', 'Shane Carruth'),
('Hereditary', '2018-06-08', 81100000, 'Toni Collette', 'Ari Aster'),
('The Impossible', '2012-12-21', 198087212, 'Naomi Watts', 'J.A. Bayona'),
('Apocalypse Now', '1979-08-15', 91700000, 'Martin Sheen', 'Francis Ford Coppola'),
('American Fiction', '2023-12-15', NULL, 'Jeffrey Wright', 'Cord Jefferson'),
('Enemy', '2014-03-14', 3480000, 'Jake Gyllenhaal', 'Denis Villeneuve'),
('Amelie', '2001-04-25', 174200000, 'Audrey Tautou', 'Jean-Pierre Jeunet'),
('Go', '1999-04-09', 28400000, 'Sarah Polley', 'Doug Liman'),
('Leave The World Behind', '2023-12-08', NULL, 'Julia Roberts', 'Sam Esmail'),
('The Vanishing', '1988-10-27', 16000000, 'Bernard-Pierre Donnadieu', 'George Sluizer'),
('Orfeu Negro', '1959-06-12', 4000000, 'Breno Mello', 'Marcel Camus'),
('The Florida Project', '2017-10-06', 11293006, 'Brooklynn Prince', 'Sean Baker'),
('The Equalizer 3', '2023-09-01', 186000000, 'Denzel Washington', 'Antoine Fuqua'),
('Batman V Superman: DoJ', '2016-03-25', 873634919, 'Ben Affleck', 'Zack Snyder'),
('Philadelphia', '1993-12-22', 206700000, 'Tom Hanks', 'Jonathan Demme'),
('American Beauty', '1999-10-01', 356300000, 'Kevin Spacey', 'Sam Mendes'),
('Funny Pages', '2022-08-26', 30000, 'Daniel Zolghadri', 'Owen Kline'),
('Terminator 2: Judgement Day', '1991-07-03', 520881154, 'Arnold Schwarzenegger', 'James Cameron'),
('Training Day', '2001-10-05', 104876233, 'Denzel Washington', 'Antoine Fuqua'),
('Shiva Baby', '2021-04-02', 400000, 'Rachel Sennott', 'Emma Seligman'),
('Renfield', '2023-04-14', 26000000, 'Nicholas Hoult', 'Chris McKay'),
('Vice', '2018-12-25', 76300000, 'Christian Bale', 'Adam McKay'),
('Hit Man', '2023-09-01', NULL, 'Glen Powell', 'Richard Linklater'),
('The World’s End', '2013-08-23', 46400000, 'Simon Pegg', 'Edgar Wright'),
('Dead Poets Society', '1989-06-09', 235900000, 'Robin Williams', 'Peter Weir'),
('Aftersun', '2022-10-21', 5000000, 'Paul Mescal', 'Charlotte Wells'),
('Bottoms', '2023-08-25', 11400000, 'Rachel Sennott', 'Emma Seligman'),
('Green Book', '2018-11-16', 321800000, 'Viggo Mortensen', 'Peter Farrelly'),
('Magic Mike', '2012-06-29', 167200000, 'Channing Tatum', 'Steven Soderbergh'),
('The Killers of the Flower Moon', '2023-10-20', NULL, 'Leonardo DiCaprio', 'Martin Scorsese'),
('1408', '2007-06-22', 132000000, 'John Cusack', 'Mikael Håfström'),
('Twister', '1996-05-10', 495700000, 'Helen Hunt', 'Jan de Bont'),
('Crumb', '1995-04-28', 3000000, 'Robert Crumb', 'Terry Zwigoff'),
('Inside Llewyn Davis', '2013-12-06', 34000000, 'Oscar Isaac', 'Joel Coen, Ethan Coen'),
('Smiley Face', '2007-01-21', 100000, 'Anna Faris', 'Gregg Araki'),
('The Gift', '2015-08-07', 58900000, 'Jason Bateman', 'Joel Edgerton'),
('Drugstore Cowboy', '1989-10-06', 4970000, 'Matt Dillon', 'Gus Van Sant'),
('A.I. Artificial Intelligence', '2001-06-29', 235900000, 'Haley Joel Osment', 'Steven Spielberg'),
('Kinds of Kindness', NULL, NULL, NULL, NULL),
('The Whale', '2022-12-09', 54600000, 'Brendan Fraser', 'Darren Aronofsky'),
('Last Tango in Paris', '1972-10-14', 9600000, 'Marlon Brando', 'Bernardo Bertolucci'),
('Manchester By The Sea', '2016-11-18', 79000000, 'Casey Affleck', 'Kenneth Lonergan'),
('Side Effects', '2013-02-08', 66900000, 'Rooney Mara', 'Steven Soderbergh'),
('The Day After Tomorrow', '2004-05-28', 552600000, 'Dennis Quaid', 'Roland Emmerich'),
('Contagion', '2011-09-09', 136500000, 'Matt Damon', 'Steven Soderbergh'),
('Uncut Gems', '2019-12-13', 50400000, 'Adam Sandler', 'Josh Safdie, Benny Safdie'),
('Annihilation', '2018-02-23', 43200000, 'Natalie Portman', 'Alex Garland'),
('I Saw The TV Glow', NULL, NULL, 'Justice Smith', 'Jane Schoenbrun'),
('The Substance', NULL, NULL, NULL, NULL),
('Dawn of the Dead', '2004-03-19', 102300000, 'Sarah Polley', 'Zack Snyder'),
('The VVitch', '2015-01-27', 40700000, 'Anya Taylor-Joy', 'Robert Eggers'),
('Midsommar', '2019-07-03', 47500000, 'Florence Pugh', 'Ari Aster'),
('Woman of the Hour', NULL, NULL, 'Anna Kendrick', 'Anna Kendrick'),
('Million Dollar Baby', '2004-12-15', 231000000, 'Hilary Swank', 'Clint Eastwood'),
('Talk To Me', '2023-07-28', 65700000, 'Sophie Wilde', 'Danny Philippou, Michael Philippou'),
('Tár', '2022-10-07', 20600000, 'Cate Blanchett', 'Todd Field'),
('Total Recall', '1990-06-01', 261000000, 'Arnold Schwarzenegger', 'Paul Verhoeven'),
('Anatomy of a Fall', '2023-08-23', NULL, 'Sandra Hüller', 'Justine Triet'),
('Trainspotting', '1996-02-23', 72100000, 'Ewan McGregor', 'Danny Boyle'),
('Election', '1999-04-23', 14800000, 'Reese Witherspoon', 'Alexander Payne'),
('Kindergarten Teacher', '2018-10-12', 324000, 'Maggie Gyllenhaal', 'Sara Colangelo'),
('Trap', NULL, NULL, NULL, NULL),
('Get Out', '2017-02-24', 255400000, 'Daniel Kaluuya', 'Jordan Peele'),
('Titanic', '1997-12-19', 2288000000, 'Leonardo DiCaprio', 'James Cameron'),
('Birdbox', '2018-12-21', NULL, 'Sandra Bullock', 'Susanne Bier'),
('My Old Ass', NULL, NULL, NULL, NULL),
('Before The Devil Knows You’re Dead', '2007-09-06', 25000000, 'Philip Seymour Hoffman', 'Sidney Lumet'),
('American Animals', '2018-06-01', 4040000, 'Evan Peters', 'Bart Layton'),
('Babel', '2006-10-27', 135000000, 'Brad Pitt', 'Alejandro González Iñárritu'),
('Kiki’s Delivery Service', '1989-07-29', 41600000, 'Minami Takayama', 'Hayao Miyazaki'),
('Grave of the Fireflies', '1988-04-16', 516000, 'Tsutomu Tatsumi', 'Isao Takahata'),
('My Neighbour Totoro', '1988-04-16', 41300000, 'Hitoshi Takagi', 'Hayao Miyazaki'),
('Ricky Stanicky', NULL, NULL, 'Zac Efron', 'Peter Farrelly'),
('The Last Picture Show', '1971-10-22', 29500000, 'Jeff Bridges', 'Peter Bogdanovich'),
('6 Below', '2017-10-13', 500000, 'Josh Hartnett', 'Scott Waugh'),
('Happy-Go-Lucky', '2008-04-18', 18000000, 'Sally Hawkins', 'Mike Leigh'),
('The People vs Larry Flynt', '1996-12-27', 43000000, 'Woody Harrelson', 'Milos Forman'),
('Collateral', '2004-08-06', 220900000, 'Tom Cruise', 'Michael Mann'),
('Bridget Jones’ Diary', '2001-04-13', 281900000, 'Renée Zellweger', 'Sharon Maguire'),
('Bridget Jones 2', '2004-11-12', 262500000, 'Renée Zellweger', 'Beeban Kidron'),
('Bridget Jones’ Baby', '2016-09-16', 212000000, 'Renée Zellweger', 'Sharon Maguire'),
('You’ve Got Mail', '1998-12-18', 250800000, 'Tom Hanks', 'Nora Ephron'),
('Molly’s Game', '2017-12-25', 59000000, 'Jessica Chastain', 'Aaron Sorkin'),
('A Simple Plan', '1998-12-11', 16800000, 'Bill Paxton', 'Sam Raimi'),
('The Family Stone', '2005-12-16', 92000000, 'Sarah Jessica Parker', 'Thomas Bezucha'),
('Beavis & Butthead Movie', '1996-12-20', 63100000, 'Mike Judge', 'Mike Judge'),
('Grease', '1978-06-16', 396300000, 'John Travolta', 'Randal Kleiser'),
('Society of the Snow', NULL, NULL, NULL, 'J.A. Bayona'),
('Just Friends', '2005-11-23', 51000000, 'Ryan Reynolds', 'Roger Kumble'),
('Marnie', '1964-07-22', 7000000, 'Tippi Hedren', 'Alfred Hitchcock'),
('Mad Max', '1979-04-12', 100000000, 'Mel Gibson', 'George Miller'),
('Office Christmas Party', '2016-12-09', 114500000, 'Jason Bateman', 'Josh Gordon, Will Speck'),
('The Secret Garden', '1993-08-13', 40000000, 'Kate Maberly', 'Agnieszka Holland'),
('The Notebook', '2004-06-25', 115600000, 'Ryan Gosling', 'Nick Cassavetes'),
('Forrest Gump', '1994-07-06', 678200000, 'Tom Hanks', 'Robert Zemeckis'),
('Genie', NULL, NULL, NULL, NULL),
('The Crash Reel', '2013-07-12', NULL, 'Kevin Pearce', 'Lucy Walker'),
('Tell Them You Love Me', NULL, NULL, NULL, NULL),
('Starlet', '2012-11-09', 346000, 'Dree Hemingway', 'Sean Baker'),
('Game Night', '2018-02-23', 117000000, 'Jason Bateman', 'John Francis Daley, Jonathan Goldstein'),
('Y Tu Mamá También', '2001-06-08', 33000000, 'Gael García Bernal', 'Alfonso Cuarón'),
('Nosferatu', '1922-03-04', NULL, 'Max Schreck', 'F.W. Murnau');
`)

    // Create the authors table
    // Create the books table with a foreign key to the authors table
    // Seed the authors table
    // Seed the books table
    console.log("reset-database.js did something");
  } catch (error) { console.log("Error Error") }
}

const wer = await resetDatabase();