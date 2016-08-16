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
const ReservationShowForm = require('./reservation_show_form');

const customStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : '0%',
    height                : '90%',
    width                 : '95%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#FD3DDD3',
    border                : '2.5px solid black',
    borderRadius          : '4px',
    color                 : 'black',
    fontWeight            : 'bold',
    textAlign             : 'center'
  },
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : 1000
  }
};

const options = ["5:00 PM", "7:00 PM", "9:00 PM"];
const defaultOption = "Please Select a Time";


const NavBar = React.createClass({
  getInitialState() {
    return {
      modalIsOpen: false,
    };
  },

  loginClick() {
    this.props.openModal();
    this.props.setLogin();
  },

  signUpClick() {
    this.props.openModal();
    this.props.setSignup();
  },

  reservationClick() {
    ErrorActions.clearErrors();
    this.openModal();
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  componentWillMount() {
    ReservationActions.fetchAllReservations();
    const appElement = document.getElementById('content');
    Modal.setAppElement(appElement);
  },

  render() {
    const loginbuttons = (
      <button
        type="button"
        className="btn btn-info btn-sm"
        id="reserve-finalize-button"
        onClick={this.loginClick}>
        Log In
      </button>
    );
    const signupbutton = (
      <button
        type="button"
        className="btn btn-info btn-sm"
        id="reserve-finalize-button"
        onClick={this.signUpClick}>
        Sign Up
      </button>
    );

    const logoutbutton = (
      <button
        type="button"
        className="btn btn-info btn-sm"
        id="reserve-finalize-button"
        onClick={this.props.handleLogout}>
        Log Out
      </button>
    );

    let greeting = <div/>;
    let myReservations = <div/>;

    let currentbutton;
    if (SessionStore.isUserLoggedIn()){
      currentbutton = logoutbutton;
      greeting = (
        <h4 className="navbar-header-name">Welcome, {SessionStore.currentUser().username}!</h4>
      );

      myReservations = (
        <button
          type="button"
          className="btn btn-info btn-sm"
          id="reserve-finalize-button"
          data-toggle="modal"
          data-target="#reservation-modal"
          onClick={this.reservationClick} >
          My Reservations
        </button>
      );

    }
    else {
      currentbutton =
      <span>
        {loginbuttons} {signupbutton}
      </span>
      ;
      greeting = <div/>;
    }

return (
  <div className="transparant-navbar">
    <nav className="navbar navbar-default navbar-fix">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <span className="glyphicon glyphicon-cutlery">
            </span>
            &nbsp;
            Chefs Table
          </Link>
        </div>
        <div className="nav navbar-nav navbar-right">
          {myReservations}{currentbutton}
        </div>
      </div>
    </nav>

    <Modal
      key="reservationModal"
      isOpen={this.state.modalIsOpen}
      onRequestClose={this.closeModal}
      style={customStyle}
      id="reservation-modal">

      <ReservationShowForm
        closeModal={this.closeModal}
        reservations={this.props.reservations}
      />
      <div>hi</div>

    </Modal>

  </div>
);
}

});

module.exports = NavBar;
