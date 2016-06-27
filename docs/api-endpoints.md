# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Restaurants

- `GET /api/restaurants`
  - Restaurant index/search
  - accepts `rest_name` query param to list notes by tag

### Reservations

- `GET /api/restaurant/:id/reservations`
- `POST /api/restaurant/:id/reservations`
- `GET /api/restaurant/:id/reservations/:id`
- `PATCH /api/restaurant/:id/reservations/:id`
- `DELETE /api/restaurant/:id/reservations/:id`

### Reviews

- `GET /api/restaurant/:id/reviews`
- `POST /api/restaurant/:id/reviews`
- `GET /api/restaurant/:id/reviews/:id`
- `PATCH /api/restaurant/:id/reviews/:id`
- `DELETE /api/restaurant/:id/reviews/:id`

- A restaurants reviews will be included in the restaurant show template
