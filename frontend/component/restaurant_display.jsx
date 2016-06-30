const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const RestaurantDetailBox = require('./restaurant_detail_box')


const RestaurantDisplay = React.createClass({
  render() {
    return (
      <section className='restaurant-details'>
        <RestaurantDetailBox/ >
            <button className="dropdown-toggle" data-toggle="dropdown"> Dropdown</button>
            <div className="dropdown-menu" role="menu" id="restaurant-dropdown">
              <span>PICS!</span>
              <h2>YO!</h2>
            </div>

      </section>
    )
  }
});

module.exports = RestaurantDisplay;
