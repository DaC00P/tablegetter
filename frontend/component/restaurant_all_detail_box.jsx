const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');


const RestaurantAllDetailBox = React.createClass({
  render() {
    return (
      <section className='restaurant-all-details'>
        <ul>
          <li className="restaurant-detail-item"> <span className="nearly-fancy-span" >{this.props.restaurant.chef}</span> Chef</li>
          <li className="restaurant-detail-item"> <span className="nearly-fancy-span" >{this.props.restaurant.city}</span> Location</li>
          <li className="restaurant-detail-item"> <span className="nearly-fancy-span" >{this.props.restaurant.cuisine}</span> Cuisine</li>
        </ul>
      </section>
    );
  }
});

module.exports = RestaurantAllDetailBox;
