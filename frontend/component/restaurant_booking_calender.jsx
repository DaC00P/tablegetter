const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
import Calendar from 'react-input-calendar';
import Dropdown from 'react-dropdown';
const Modal = require('react-modal');
const ReservationFinalizeForm = require('./reservation_finalize_form');
const LoginForm = require('./login_form');
const ReactTooltip = require("react-tooltip");

const customStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : '0%',
    height                : '75%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : "#FD3DDD3",
    border                : '2.5px solid black',
    borderRadius          : '4px',
    color                 : 'black'
  }
};

const reserveDate = new Date();

const RestaurantBookingCalender = React.createClass({
  //Set a flag the first time the state changes
  getInitialState() {
    return (
      {reservationDate: new Date(),
       reservationTime: "",
       modalIsOpen: false,
       currentForm: 'finalize'
    });
  },

  handleCalenderSelect(date) {
    this.setState({reservationDate: date});
  },

  handleTimeSelect(time) {
    this.setState({reservationTime: time});
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function(e) {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  switchToLoginSignupForm(form) {
    this.setState({currentForm: form});
  },

  getCurrentForm() {
    if (this.state.currentForm === 'finalize') {
      return (
        <ReservationFinalizeForm
          switchToLoginSignupForm={this.switchToLoginSignupForm}
          restaurant={this.props.restaurant}
          closeModal={this.closeModal}
          date={this.state.reservationDate}
          time={this.state.reservationTime}/>
      );
    } else {
      return (
        <LoginForm closeModal={this.closeModal}/>
      );
    }
  },

  getFinalizeButton() {
    return (
      <button
        className="btn btn-primary btn-lg"
        id='reserve-finalize-button'
        onClick={this.openModal}>
        Book Reservation
      </button>
    );
  },

  handleTypingInDateField(e) {
    e.preventDefault();
  },

  render() {
    const options = ["5:00 PM", "7:00 PM", "9:00 PM"];
    const defaultOption = "Please Select a Time";
    const currentForm = this.getCurrentForm();
    const finalizeButton = this.getFinalizeButton();

    return (
      <section className='restaurant-booking-calender'>
            {finalizeButton}

        <Modal contentLabel='aria-label'
               isOpen={this.state.modalIsOpen}
               onRequestClose={this.closeModal}
               style={customStyle}
               id="reservation-modal">
          {currentForm}
        </Modal>
      </section>
    );
  }
});

module.exports = RestaurantBookingCalender;
