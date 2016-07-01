const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const Calender = require('react-datetime');


const RestaurantBookingCalender = React.createClass({
  render() {
    return (
      <section className='restaurant-booking-calender'>
        <Calender defaultValue='Click Here to Reserve'/>
      </section>
    )
  }
});

module.exports = RestaurantBookingCalender;
