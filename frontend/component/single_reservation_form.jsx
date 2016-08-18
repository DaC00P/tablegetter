"use strict";

const React = require('react');
const Link = require('react-router').Link;
const LoginForm = require('./login_form');
const SessionStore = require('../stores/session_store');
const ReservationStore = require('../stores/reservation_store');
const Modal = require('react-modal');
import Calendar from 'react-input-calendar';
import Dropdown from 'react-dropdown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const ReservationActions = require('../actions/reservation_actions');
const SessionActions = require('../actions/session_actions');
const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const ReservationEditForm = require('./reservation_edit_form');
const Moment = require('moment');

const SingleReservationForm = React.createClass({

  getInitialState() {
      return {reservation: this.props.reservation};
  },

  componentWillMount() {
    ReservationStore.addListener(this.accessCurrentUserSingleReservation);
  },

  accessCurrentUserSingleReservation() {
    let reservation = ReservationStore.find(this.props.reservation.id);
    this.setState({reservation: reservation});
  },

  generateReservationView() {

    let userReservation = [];
    userReservation.push(this.state.reservation);

    if (userReservation.length === 0) {
      return (
        <li>
          We are sorry, you do not have a reservation to view!
        </li>
      );
    }

    let restaurantName = "";
    return userReservation.map( (singleReservation) => {

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
                  Your Current Reservation Date is: {Moment(new Date(singleReservation.date)).format('dddd, MMMM Do YYYY')}
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
              </ul>
          </div>
        );
    });

  },


  render() {
    let reservationView = this.generateReservationView();

    return (
      <div>

      <Tabs>

        <TabList>
            <Tab>
              View
            </Tab>
            <Tab>
              Edit
            </Tab>
        </TabList>

        <TabPanel>
          {reservationView}
        </TabPanel>

        <TabPanel>
          <ReservationEditForm reservation={this.state.reservation}/>
        </TabPanel>

      </Tabs>


      </div>
    );
  }

});

module.exports = SingleReservationForm;
