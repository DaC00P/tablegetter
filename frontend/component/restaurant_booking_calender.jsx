const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
import Calendar from 'react-input-calendar'
import Dropdown from 'react-dropdown'



const RestaurantBookingCalender = React.createClass({
  handleClick() {

  },

  render() {
    const options = ["5:00 PM", "7:00 PM", "9:00 PM"]
    const defaultOption = "Please Select a Seating"

    return (
      <section className='restaurant-booking-calender'>
        <section className = 'calender-seating-section'>
            <Calendar type="calender" format='DD/MM/YYYY' date={new Date()} defaultValue='Click Here to Reserve'/>
            <Dropdown options={options} value={defaultOption} />
        </section>


        <button className='reserve-finalize-button' onClick={this.handleClick}>Finalize Reservation</button>
      </section>
    )
  }
});

module.exports = RestaurantBookingCalender;

// onChange={this._onSelect} this for the dropdown onclick
