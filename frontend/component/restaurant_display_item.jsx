const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const RestaurantDetailBox = require('./restaurant_detail_box');
const ReviewBox = require('./restaurant_review_box');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;


const RestaurantDisplayItem = React.createClass({

  _onMouseEnter () {
     RestaurantActions.highlightRestaurant(this.props.restaurant.id);
   },

   _onMouseLeave () {
     RestaurantActions.unhighlightRestaurant(this.props.restaurant.id);
   },

   showRestaurant() {
     hashHistory.push(`/api/restaurants/${this.props.restaurant.id}`);
   },

  render() {
    return (
      <section className='restaurant-details'  onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>
        <h2 className='restaurant-name-header'>{this.props.restaurant.name}</h2>
        <RestaurantDetailBox restaurant={this.props.restaurant}/ >
            <button type="button" className="btn btn-info btn-sm" onClick={this.showRestaurant}>See Reviews & More</button>
      </section>
    );
  }
});

module.exports = RestaurantDisplayItem;
