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
const ReservationViewForm = require('./reservation_view_form');
const ReservationEditForm = require('./reservation_edit_form');

const ReservationShowForm = React.createClass({
  componentWillMount() {
    ReservationActions.fetchAllReservations();
  },

  render() {
    return (
      <div>
        <ReservationEditForm reservations={this.props.reservations} errors={this.props.errors}/>
      </div>

    );
  }
});

module.exports = ReservationShowForm;

// <ReservationViewForm reservations={this.props.reservations} errors={this.props.errors}/>
