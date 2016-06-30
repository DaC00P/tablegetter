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
          <li className="restaurant-detail-item">Chef</li>
          <li className="restaurant-detail-item">Cuisine</li>
          <li className="restaurant-detail-item">Description</li>
        </ul>
      </section>
    )
  }
});

module.exports = RestaurantAllDetailBox;
