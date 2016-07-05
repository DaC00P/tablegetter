"use strict";

const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ReservationStore = new Store(AppDispatcher);

let _reservations = {};

ReservationStore.__onDispatch = function(payload) {
  switch (payload.actionType){
    case "receive_reservation":
      resetAllReservations(payload.reservation);
      break;
    case "receive_reservations":
      resetAllReservations(payload.reservations);
      break;
  }
};

ReservationStore.all = function() {
  return Object.keys(_reservations).map((key) => {return (_reservations[key]);});
};

ReservationStore.find = function(id) {
  return Object.assign({}, _reservations[id]);
};

function resetAllReservations(reservation) {
  _reservations = reservation;
  ReservationStore.__emitChange();
}



module.exports = ReservationStore;
