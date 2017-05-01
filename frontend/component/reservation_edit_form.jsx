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


const options = ["5:00 PM", "7:00 PM", "9:00 PM"];
const defaultOption = "Please Select a Time";

const ReservationEditForm = React.createClass({

  getInitialState() {
    return {
      errors: "",
      reservationDate: new Date(),
      reservationTime: "",
      party_size: 0,
      allergies: "",
      special_instructions: ""
    };
  },

  componentWillMount() {
    this.errorListener = ErrorStore.addListener(this.handleErrors);
  },

  componentWillUnmount() {
    this.errorListener.remove();
  },

  handleCalenderSelect(date) {
    this.setState({reservationDate: date});
  },

  handleTimeSelect(time) {
    this.setState({reservationTime: time.value});
  },

  handleErrors() {
    this.setState({errors: ErrorStore.formErrors("reservationErrors")});
  },

  editReservationDetails(id, event) {
    event.preventDefault();
    let reservationDetails = {
      id: id,
      date: this.state.reservationDate,
      time: this.state.reservationTime,
      party_size: this.state.party_size,
      allergies: this.state.allergies,
      special_instructions: this.state.special_instructions
    };
    ReservationActions.editReservationDetails(reservationDetails);
  },

  editPartySize(event) {
    this.setState({party_size: event.currentTarget.value});
  },

  editAllergies(event) {
    this.setState({allergies: event.currentTarget.value});
  },

  editSpecialInstructions(event) {
    this.setState({special_instructions: event.currentTarget.value});
  },

  cancelReservation(id) {
    ReservationActions.cancelReservation(id);
  },

  generateReservationsEditView() {
    let reservation;
    let restaurantName = "";

      if (RestaurantStore.findByID(this.props.reservation.restaurant_id) !== undefined){
        restaurantName = RestaurantStore.findByID(this.props.reservation.restaurant_id).name;
      }


      return (
        <div
          key = {this.props.reservation.id * 12}
          className="user-reservation-ud">
          <h2 className="your-reservation-at">
            Your Reservation at {restaurantName}
          </h2>

          <ul
            key={this.props.reservation.id}
            className='reservation-details-edit'>
            <h4>
              If you would like to edit your Reservation, please fill out the form and press Edit Reservation
            </h4>
            <span className="reservation-finalize-form-errors">
              {this.props.errors}
            </span>
            <li key={this.props.reservation.id * 9}>
              Your Current Reservation Date is: {this.props.reservation.date} <Calendar onChange={this.handleCalenderSelect}
              closeOnSelect={true} type="calender" format='DD/MM/YYYY' date={this.state.reservationDate} defaultValue='Click Here to Reserve'/>
            </li>
            <li key={this.props.reservation.id * 8}>
            Your Current Reservation Time is: {this.props.reservation.time} <Dropdown onChange={this.handleTimeSelect}
            className="" options={options} value={this.state.reservationTime} placeholder="Please Select a Seating" />
            </li>
            <li key={this.props.reservation.id * 7}>
              <input
                onChange={this.editPartySize}
                type="text"
                placeholder="Please Enter Your New Party Size"
                className="reservation-entry-details"/>
            </li>
            <li key={this.props.reservation.id * 6}>
              <input
                onChange={this.editAllergies}
                type="text"
                placeholder="Please Enter Your New Allergies"
                className="reservation-entry-details"/>
            </li>
            <li key={this.props.reservation.id * 5}>
              <input
                onChange={this.editSpecialInstructions}
                type="text"
                placeholder="Please Enter You New Special Instructions"
                className="reservation-entry-details"/>
            </li>

            <button
              type="button"
              className="btn btn-info btn-sm"
              id="reserve-finalize-button"
              onClick={this.editReservationDetails.bind(this, this.props.reservation.id)} >
              Edit Reservation
            </button>
            &nbsp;
            <button
              type="button"
              className="btn btn-info btn-sm"
              id="reserve-finalize-button"
              onClick={this.cancelReservation.bind(this, this.props.reservation.id)} >
              Cancel Reservation
            </button>

          </ul>
        </div>
    );
  },

  render() {
    let reservation = this.generateReservationsEditView();
    return (
      <section>
        {reservation}
      </section>
    );
  }
});

module.exports = ReservationEditForm;
