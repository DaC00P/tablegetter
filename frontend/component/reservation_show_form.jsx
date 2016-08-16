"use strict";

const React = require('react');
const Link = require('react-router').Link;
const LoginForm = require('./login_form');
const SessionStore = require('../stores/session_store');
const ReservationStore = require('../stores/reservation_store');
const Modal = require('react-modal');
import Calendar from 'react-input-calendar';
import Dropdown from 'react-dropdown';
const ReservationActions = require('../actions/reservation_actions');
const SessionActions = require('../actions/session_actions');
const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const SingleReservationForm = require('./single_reservation_form');


const ReservationShowForm = React.createClass({

  accessCurrentUserReservations() {
    let reservations = [];
    let currentUserID = SessionStore.currentUser().id;
    let reservationsObjects = ReservationStore.all();
    for (let i = 0; i < reservationsObjects.length; i++) {
      let reservationObj = reservationsObjects[i];
      if (!(reservationObj["user_id"] === currentUserID)){
        delete reservations[reservationObj];
      }
      else {
        reservations.push(reservationObj);
      }
    }
    return reservations;
  },


  render() {
    let reservations = this.accessCurrentUserReservations().map((reservation) => {
      return (
        <div key={reservation.id * 2}>
          <SingleReservationForm key={reservation.id} reservation={reservation}/>
        </div>
      );
    });

    return (
      <ul className="total-reservation-edit" key={9999}>
        {reservations}
      </ul>
    );
  }

});

module.exports = ReservationShowForm;
