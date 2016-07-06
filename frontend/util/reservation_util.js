"use strict";

const ReservationStore = require('../stores/reservation_store');

const RestaurantUtil = {
  fetchAllReservations(success){
    $.get('api/reservations', success);
  },

  fetchSingleReservation(id, success){
    $.get('api/reservations/:id', success);
  },

  postSingleReservation(reservation, callback, confirmationcallback){
    $.ajax({
      method: "POST",
      url: 'api/reservations',
      data: reservation,
      success(response) {
        callback(response);
        confirmationcallback();
      }
    }
   );
 },

 cancelReservation(reservationId, callback, confirmationcallback) {
   $.ajax({
     method: "DELETE",
     url: `api/reservations/${reservationId}`,
     success(response) {
       callback(response);
     }
   }
  );
 }
};

module.exports = RestaurantUtil;
