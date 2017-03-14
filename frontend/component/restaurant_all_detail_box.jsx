const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');


const RestaurantAllDetailBox = React.createClass({
  render() {
    return (
      <section className='restaurant-all-details'>
          By {this.props.restaurant.chef},
          Located In {this.props.restaurant.city}
      </section>
    );
  }
});

module.exports = RestaurantAllDetailBox;
