https://www.canva.com/design/DAGbyZ90gaE/kdnzoBoijfSCGfhvh8YYtA/view?utm_content=DAGbyZ90gaE&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel


# Dave's Movies

## RESTful API fetching data (CRUD) from a PostgreSQL database

| HTTP Method | Path       | Request Body (JSON)          | Response Body (JSON)            | Status Code |
| ------ | ---------- | --------------------- | ----------------- | ----------- |
| GET    | /movies     |                       | Get all movies     | 200         |
| GET    | /movies/:id |                       | Get a movie by ID  | 200         |
| POST   | /movies     | A movie object         | Create a new movie | 201         |
| PATCH  | /movies/:id | A partial movie object | Update a movie by ID  | 200         |
| DELETE | /movies/:id |                       | Delete a movie by ID  | 200         |

| HTTP Method | Path         | Request Body (JSON)            | Response Body (JSON)              | Status Code |
| ------ | ------------ | ----------------------- | ------------------- | ----------- |
| GET    | /reviews     |                         | Get all reviews     | 200         |
| GET    | /reviews/:id |                         | Get a review by ID | 200         |
| POST   | /reviews     | A review object        | Create a new review | 201         |
| PATCH  | /reviews/:id | A partial review object | Update a review by ID | 200         |
| DELETE | /reviews/:id |                         | Delete a review by ID | 200         |
