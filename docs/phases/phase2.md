### Phase 2: Back End Models & Controllers Pt 2 (2 days, W1 Th EOD)

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


## Flux
### Views (React Components)
* RestaurantIndex
  - RestaurantIndexItem


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
