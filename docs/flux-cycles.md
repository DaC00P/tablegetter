# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Restaurant Cycles

### Restaurant API Request Actions

* `fetchAllRestaurants`
  0. invoked from `RestaurantsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/restaurants` is called.
  0. `receiveAllRestaurants` is set as the callback.

* `fetchSingleRestaurant`
  0. invoked from `RestaurantDetail` `didMount`/`willReceiveProps`
  0. `GET /api/restaurants/:id` is called.
  0. `receiveSingleRestaurant` is set as the callback.

### Restaurant API Response Actions

* `receiveAllRestaurants`
  0. invoked from an API callback.
  0. `Restaurant` store updates `_restaurants` and emits change.

* `receiveSingleRestaurant`
  0. invoked from an API callback.
  0. `Restaurant` store updates `_restaurants[id]` and emits change.

### Store Listeners

* `RestaurantsIndex` component listens to `Restaurant` store.
* `RestaurantDetail` component listens to `Restaurant` store.


## Reservation Cycles

### Reservations API Request Actions

* `fetchAllReservations`
  0. invoked from `ReservationsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/restaurants/:id/reservations` is called.
  0. `receiveAllReservations` is set as the callback.

* `createReservation`
  0. invoked from new reservation button `onClick`
  0. `POST /api/restaurants/:id/reservations` is called.
  0. `receiveSingleReservation` is set as the callback.

* `fetchSingleReservation`
  0. invoked from `ReservationDetail` `didMount`/`willReceiveProps`
  0. `GET /api/restaurants/:id/reservations/:id` is called.
  0. `receiveSingleReservation` is set as the callback.

* `updateReservation`
  0. invoked from `ReservationForm` `onSubmit`
  0. `POST /api/restaurants/:id/reservations/:id` is called.
  0. `receiveSingleReservation` is set as the callback.

* `destroyReservation`
  0. invoked from delete notebook button `onClick`
  0. `DELETE /api/restaurants/:id/reservations/:id` is called.
  0. `removeReservation` is set as the callback.

### Reservations API Response Actions

* `receiveAllReservations`
  0. invoked from an API callback.
  0. `Reservation` store updates `_reservations` and emits change.

* `receiveSingleReservation`
  0. invoked from an API callback.
  0. `Reservation` store updates `_reservations[id]` and emits change.

* `removeReservation`
  0. invoked from an API callback.
  0. `Reservation` store updates `_reservations[id]` and emits change.

* `addReservation`
  0. invoked from an API callback.
  0. `Reservation` store updates `_reservations[id]` and emits change.

* `updateReservation`
  0. invoked from an API callback.
  0. `Reservation` store updates `_reservations[id]` and emits change.

### Store Listeners

* `ReservationForm` component listens to `Reservation` store.

## Review Cycles

### Review API Request Actions

* `fetchAllReviews`
  0. invoked from `ReviewsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/restaurants/:id/reviews` is called.
  0. `receiveAllReviews` is set as the callback.

* `createReview`
  0. invoked from new review button `onClick`
  0. `POST /api/restaurants/:id/reviews` is called.
  0. `receiveSingleReview` is set as the callback.

* `fetchSingleReview`
  0. invoked from `ReviewDetail` `didMount`/`willReceiveProps`
  0. `GET /api/restaurants/:id/reviews/:id` is called.
  0. `receiveSingleReview` is set as the callback.

* `updateReview`
  0. invoked from `ReservationForm` `onSubmit`
  0. `POST /api/restaurants/:id/review/:id` is called.
  0. `receiveSingleReview` is set as the callback.

* `destroyReview`
  0. invoked from delete notebook button `onClick`
  0. `DELETE /api/restaurants/:id/review/:id` is called.
  0. `removeReview` is set as the callback.

### Review API Response Actions

* `receiveAllReviews`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews` and emits change.

* `receiveSingleReview`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews[id]` and emits change.

* `removeReview`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews[id]` and emits change.

### Store Listeners

* `ReviewForm` component listens to `Review` store.


## SearchForReservations Cycles

* `fetchSearchSuggestions`
  0. invoked from `ReservationSearchBar` `onChange` when there is text || selection
  0. `GET /api/restaurants/:id/reservations` is called with `text` param.
  0. `receiveSearchedForReservations` is set as the callback.

* `receiveSearchedForReservations`
  0. invoked from an API callback.
  0. `ReservationSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `ReviewSearchBar` `onChange` when empty
  0. `ReservationSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
