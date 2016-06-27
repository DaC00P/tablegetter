### Phase 7: Bug Fixing, QA, Styling & Styling Cleanup. Seed Production DB (1.5 days, W2 Friday EOD)

## Rails
### Models
* Reservations
* Reviews

### Controllers
* Reservations
* Reviews

### Views
* users/new.html.erb
* session/new.html.erb
* restaurant/index.json.jbuilder
* restaurant/show.json.jbuilder
* reservation/create.json.jbuilder
* reservation/edit.json.jbuilder
* reservation/create.json.jbuilder
* review/create.json.jbuilder


## Flux
### Views (React Components)
* RestaurantIndex
  - RestaurantIndexItem
* ReservationForm
* ReviewForm
* RestaurantMap
  -RestaurantMapItem (a marker)

### Stores
* Restaurant
* Reservation
* Review


### Actions
* ApiActions.receiveAllRestaurants -> triggered by ApiUtil
* ApiActions.receiveSingleRestaurant
* RestaurantActions.fetchAllRestaurants -> triggers ApiUtil
* RestaurantActions.fetchSingleRestaurant
* ReservationActions.fetchAllReservations -> triggers ApiUtil
* ReservationActions.fetchSingleReservation
* ReservationActions.createReservations
* ReservationActions.editReservation
* ReservationActions.destroyReservation


### ApiUtil
* ApiUtil.fetchAllRestaurants
* ApiUtil.fetchSingleRestaurant
* ApiUtil.fetchAllReservations -> triggers ApiUtil
* ApiUtil.fetchSingleReservation
* ApiUtil.createReservation
* ApiUtil.editReservation
* ApiUtil.destroyReservation


## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
