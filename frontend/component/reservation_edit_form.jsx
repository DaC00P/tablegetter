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

  renderErrors() {
    if(this.state.errors.error){
      let error = this.state.errors.error[0]
      return(
        <ul className="error-list">
          <li>
            Please fix the following error: {error}
          </li>
          <li>
            Please select your current time in order to confirm the change, even if you do not wish to change it. Thank You.
          </li>
        </ul>
      );
    };
    return (<li></li>)
  },

  generateReservationsEditView() {
    this.renderErrors();
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
            Change Your Reservation at {restaurantName}
          </h2>

          <form onSubmit={(event) => {event.preventDefault()}}
            key={this.props.reservation.id}
            className='reservation-details-edit'>
            <div key={this.props.reservation.id * 9}>
              Your Current Reservation Date is: {this.props.reservation.date}
              <Calendar onChange={this.handleCalenderSelect}
              closeOnSelect={true} type="calender" format='DD/MM/YYYY' date={this.state.reservationDate} defaultValue='Click Here to Reserve'/>
            </div>
            <div className='form-group' key={this.props.reservation.id * 8}>
              Your Current Reservation Time is: {this.props.reservation.time}
              <Dropdown onChange={this.handleTimeSelect}
              className="" options={options} value={this.state.reservationTime} placeholder="Please Select a Seating" />
            </div>
            <div className="form-group">
              <label htmlFor="inputPartySize">Party Size</label>
              <input onChange={this.editPartySize} type="number" className="form-control" id="inputPartySize" aria-describedby="partySizeHelp" placeholder="Enter Party Size" />
              <small id="partySizeHelp" className="form-text text-muted">Please let us know how many we should set the table for!</small>
            </div>
            <div className="form-group">
              <label htmlFor="inputAllergies">Allergies?</label>
              <input onChange={this.editAllergies} type="text" className="form-control" id="inputAllergies" aria-describedby="allergyHelp" placeholder="Enter any allergies" />
              <small id="allergyHelp" className="form-text text-muted">Please provide us with any allergy information, so we may customize your experience.</small>
            </div>
            <div className="form-group">
              <label htmlFor="inputSpecialInstructions">Special Instructions?</label>
              <input onChange={this.editInstructions} type="text" className="form-control" id="inputSpecialInstructions" aria-describedby="specialInstructionsHelp" placeholder="Enter any special requests" />
              <small id="specialInstructionsHelp" className="form-text text-muted">Have any special requests? Let us know!</small>
            </div>
            <button
              type="button"
              className="btn btn-info btn-sm"
              id="reserve-finalize-button"
              onClick={this.editReservationDetails.bind(this, this.props.reservation.id)} >
              Edit Reservation
            </button>
            &nbsp;
            <button
              type="submit"
              className="btn btn-info btn-sm"
              id="reserve-finalize-button"
              onClick={this.cancelReservation.bind(this, this.props.reservation.id)} >
              Cancel Reservation
            </button>
          </form>
        </div>
    );
  },

  render() {
    let reservation = this.generateReservationsEditView();
    let errorList = this.renderErrors();
    return (
      <section>
        {reservation}
        <div>
          {errorList}
        </div>
      </section>
    );
  }
});

module.exports = ReservationEditForm;
