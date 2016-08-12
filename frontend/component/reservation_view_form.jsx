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


const ReservationViewForm = React.createClass({

  componentWillMount() {
    ReservationStore.addListener(this.accessCurrentUserReservations);
  },

  accessCurrentUserReservations() {
    const currentUserID = SessionStore.currentUser.id;
    const reservations = ReservationStore.all();
    for (let obj in reservations) {
      if (!(obj["user_id"] === currentUserID)){
        delete reservations[obj];
      }
    }
    return reservations;
  },


  generateReservations() {
    let reservations = [];
    let userReservations = this.accessCurrentUserReservations();

    for (let reservation in userReservations){
      reservations.push(this.props.reservations[reservation]);
    }

    let restaurantName = "";
    reservations = reservations.map( (singleReservation) => {


          if (RestaurantStore.findByID(singleReservation.restaurant_id) !== undefined){
            restaurantName = RestaurantStore.findByID(singleReservation.restaurant_id).name;
          }


          return (
            <div
              key = {singleReservation.id * 12}
              className="user-reservation-ud">

              <br/>

              <h2 className="your-reservation-at">
                Your Reservation at {restaurantName}
              </h2>

              <ul
                key={singleReservation.id}
                className='reservation-details-edit'>
                <br>
                </br>
                <span className="reservation-finalize-form-errors">
                  {this.props.errors}
                </span>
                <br>
                </br>
                <li key={singleReservation.id * 9}>
                  Your Current Reservation Date is: {singleReservation.date}
                </li>
                <li key={singleReservation.id * 8}>
                Your Current Reservation Time is: {singleReservation.time}
                </li>
                <li key={singleReservation.id * 7}>
                  Your Current Party Size is: {singleReservation.party_size}
                </li>
                <li key={singleReservation.id * 6}>
                  Your Current Allergy Notes are: {singleReservation.allergies}
                </li>
                <li key={singleReservation.id * 5}>
                  Your Current Specical Instructions are: {singleReservation.special_instructions}
                </li>
                <button
                  type="button"
                  className="btn btn-info btn-sm"
                  id="reserve-finalize-button"
                  onClick={console.log('this button will open the edit view for the specific reservation')} >
                  Edit Reservation
                </button>
          </ul>
        </div>

      );
    });
    if (reservations.length === 0){
      reservations = (
        <li>
          We are sorry, you do not have any reservations to view!
        </li>
      );
    }
    return reservations;
  },

  render() {
    let reservations = this.generateReservations();
    return (
      <section>
        {reservations}
      </section>
    );
  }
});

module.exports = ReservationViewForm;
