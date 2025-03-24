# Dave's Movies

## Overview

This project was undertaken to design, implement, and deploy an API for managing a collection of movie data using a managed PostgreSQL database hosted on Render. The goal was to create a robust and scalable solution for storing and accessing movie-related information.

The initial dataset consisted of movie names, short reviews, and scores collected by Dave over the years. To enhance the dataset, additional details such as director, box office earnings, genre, and release date were generated using ChatGPT.

## Database Design

We began by designing a database schema tailored to store and organize the movie data efficiently. The schema included tables for core movie attributes (e.g., name, director, genre, release date) and user-provided data like reviews and scores.

The data was then prepared in JSON format and imported into the PostgreSQL database.

## Data Enrichment

To enrich the dataset, we used ChatGPT to generate additional metadata for the movies. This allowed for a more comprehensive and valuable dataset, suitable for advanced querying and analysis.

## Deployment

The API was deployed using Render, a modern cloud platform that simplifies hosting and scaling applications. Render's managed PostgreSQL service ensured seamless database hosting and performance.

## Future Enhancements

- Add authentication and authorization for secure API access.
- Integrate features for sorting, filtering, and searching movies.
- Visualize data using a front-end application.

## Acknowledgments

Special thanks to ChatGPT for assisting with data enrichment and Render for providing a reliable hosting platform.

# Presentation Slides

https://www.canva.com/design/DAGbyZ90gaE/kdnzoBoijfSCGfhvh8YYtA/view?utm_content=DAGbyZ90gaE&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel

# Technical Requirements

Programming Language: JavaScript
Environment: Node.js
UI: None (Optional, but you can demo through Postman / Thunderclient / etc)
Data Source: A Hosted PostgreSQL Database
Response Specification: All JSON responses from your API should adhere to the JSend specification. This specification provides a consistent structure for your responses, making your API more predictable and easier to interact with.

## RESTful API fetching data (CRUD) from a PostgreSQL database

| HTTP Method | Path        | Request Body (JSON)    | Response Body (JSON) | Status Code |
| ----------- | ----------- | ---------------------- | -------------------- | ----------- |
| GET         | /movies     |                        | Get all movies       | 200         |
| GET         | /movies/:id |                        | Get a movie by ID    | 200         |
| POST        | /movies     | A movie object         | Create a new movie   | 201         |
| PATCH       | /movies/:id | A partial movie object | Update a movie by ID | 200         |
| DELETE      | /movies/:id |                        | Delete a movie by ID | 200         |

| HTTP Method | Path         | Request Body (JSON)     | Response Body (JSON)  | Status Code |
| ----------- | ------------ | ----------------------- | --------------------- | ----------- |
| GET         | /reviews     |                         | Get all reviews       | 200         |
| GET         | /reviews/:id |                         | Get a review by ID    | 200         |
| POST        | /reviews     | A review object         | Create a new review   | 201         |
| PATCH       | /reviews/:id | A partial review object | Update a review by ID | 200         |
| DELETE      | /reviews/:id |                         | Delete a review by ID | 200         |
