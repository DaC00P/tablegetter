"use strict";

const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ReservationStore = new Store(AppDispatcher);

let _reservations = {};

ReservationStore.__onDispatch = function(payload) {
  switch (payload.actionType){
    case "receive_reservation":
      receiveSingleReservation(payload.reservation);
      break;
    case "receive_reservations":
      resetAllReservations(payload.reservations);
      break;
    case "cancel_reservation":
      removeReservation(payload.reservation);
      break;
  }
};

ReservationStore.all = function() {
  return Object.keys(_reservations).map((key) => {return (_reservations[key]);});
};

ReservationStore.find = function(id) {
  return Object.assign({}, _reservations[id]);
};

function receiveSingleReservation(reservation) {
  _reservations[reservation.id] = reservation;
  ReservationStore.__emitChange();
}

function resetAllReservations(reservations) {
  for (let i = 0; i < reservations.length; i++) {
    _reservations[reservations[i].id] = reservations[i];
  }
  ReservationStore.__emitChange();
}

function removeReservation(reservation) {
  delete _reservations[reservation.id];
  ReservationStore.__emitChange();
}



module.exports = ReservationStore;
