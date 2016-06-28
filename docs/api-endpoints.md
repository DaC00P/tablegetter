# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET api/users/new`
- `POST api/users`
- `PATCH api/users`

### Session

- `GET api/session/new`
- `POST api/session`
- `DELETE api/session`

## JSON API

### Restaurants

- `GET /api/restaurants`
  - Restaurant index/search
  - accepts `rest_name` query param to list notes by tag

### Reservations

- `POST /api/restaurant/:id/reservations`
- `GET /api/reservations/:id`
- `PATCH /api/reservations/:id`
- `DELETE /api/reservations/:id`

### Reviews

- `GET` (reviews will come bundled with restaurants)
- `POST /api/restaurant/:id/reviews`
- `GET /api/reviews/:id`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`

- A restaurants reviews will be included in the restaurant show template
