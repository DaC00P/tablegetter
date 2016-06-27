## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **Restaurants**
    * Search
    * RestaurantIndexItem
    * RestaurantIndexItem

    * **Reservations**
      * ReservationForm
      * ReservationItem

    * **Reviews**
      * ReviewForm
      * ReviewIndex
      * ReviewIndexItem


## Routes

* **component:** `App` **path:** `/`
  * **component:** `RestaurantIndex` **path:** index
  * **component:** `RestaurantIndexItem` **path:** `restaurants/:restaurantId`
    * **component:** `Reservation` **path:** `restaurant/:restaurantId/reservation`
      * **component:** `ReviewDetail` **path:** `restaurant/:restaurantId/reservation/:id`
    * **component:** `ReviewIndex` **path:** `restaurant/:restaurantId/reviews`
      * **component:** `ReviewDetail` **path:** `restaurant/:restaurantId/reviews/:id`
