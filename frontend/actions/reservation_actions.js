"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;
const ReservationApiUtil = require('../util/reservation_util');


const ReservationActions = {
  fetchAllReservations() {
    ReservationApiUtil.fetchAllReservations(this.receiveAllReservations);
  },

  receiveAllReservations(reservations) {
    AppDispatcher.dispatch({
      actionType: "receive_reservations",
      reservations: reservations
    });
  },

  fetchSingleReservation(id) {
    ReservationApiUtil.fetchAllReservation(id, this.receiveSingleReservation);
  },

  receiveSingleReservation(reservation) {
    AppDispatcher.dispatch({
      actionType: "receive_reservation",
      reservation: reservation
    });
  },

  receiveCanceledReservation(reservation) {
    AppDispatcher.dispatch({
      actionType: "cancel_reservation",
      reservation: reservation
    });
  },

  postSingleReservation(reservation, confirmationcallback) {
    ReservationApiUtil.postSingleReservation(reservation, this.receiveSingleReservation, confirmationcallback);
  },

  cancelReservation(reservationId) {
    ReservationApiUtil.cancelReservation(reservationId, this.receiveCanceledReservation);
  }

};

module.exports = ReservationActions;
