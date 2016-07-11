"use strict";

const ReservationStore = require('../stores/reservation_store');
const ErrorActions = require('../actions/error_actions');

const RestaurantUtil = {
  fetchAllReservations(success){
    $.get('api/reservations', success);
  },

  fetchSingleReservation(id, success){
    $.get('api/reservations/:id', success);
  },

  postSingleReservation(reservation, callback, confirmationcallback, errorCallback){
    $.ajax({
      method: "POST",
      url: 'api/reservations',
      data: reservation,
      success(response) {
        callback(response);
        confirmationcallback();
      },
      error(response){
        const errors = response.responseJSON;
        errorCallback("reservationErrors", errors);
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
},

 editReservation(reservationDetails, callback, errorCallback) {
   $.ajax({
     method: "PATCH",
     url: `api/reservations/${reservationDetails.id}`,
     data: {reservation: reservationDetails},
     success(response) {
       callback(response);
       ErrorActions.clearErrors();
     },
     error(response){
       const errors = response.responseJSON;
       errorCallback("reservationErrors", errors);
     }
   }
  );
 }
};

module.exports = RestaurantUtil;
