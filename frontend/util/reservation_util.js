"use strict";

const ReservationStore = require('../stores/reservation_store');

const RestaurantUtil = {
  fetchAllReservations(success){
    $.get('api/reservations', success);
  },

  fetchSingleReservation(id, success){
    $.get('api/reservations/:id', success);
  }
};

module.exports = RestaurantUtil;
