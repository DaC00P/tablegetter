const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const RestaurantAllDetailBox = require('./restaurant_all_detail_box')
const RestaurantBookingCalender = require('./restaurant_booking_calender')



const RestaurantDetailBox = React.createClass({

  render() {
    return (
      <section className="restaurant-box-group">
        <section className='detail-booking-section'>
          <RestaurantAllDetailBox restaurant={this.props.restaurant}/>
          <RestaurantBookingCalender/>
          <span></span>
        </section>

        <img className="main-restaurant-food-pic" src="http://res.cloudinary.com/dldvsrho8/image/upload/v1467328339/Tropical-Fruit-2000x1717_iqltvu.jpg" alt="FOODPORN"/>

      </section>

    )
  }
});

module.exports = RestaurantDetailBox;


// let currentDate = new Date().setHours(0, 0, 0, 0)
// sliceIdx = Date(currentDate).indexOf("00:00:00:00")
// currentDate = Date(currentDate).slice(0, sliceIdx)
