const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const RestaurantAllDetailBox = require('./restaurant_all_detail_box');
const RestaurantBookingCalender = require('./restaurant_booking_calender');




const RestaurantDetailBox = React.createClass({

  render() {
    return (
      <section className="restaurant-box-group">
        <section className='detail-booking-section'>
          <RestaurantAllDetailBox restaurant={this.props.restaurant}/>
          <RestaurantBookingCalender restaurant={this.props.restaurant}/>
          <span></span>
        </section>



      </section>

    );
  }
});

module.exports = RestaurantDetailBox;
