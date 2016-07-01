const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const RestaurantDisplayItem = require('./restaurant_display_item');


const RestaurantDisplay = React.createClass({
  getInitialState() {
    return {restaurants: []}
  },

  componentDidMount() {
    RestaurantStore.addListener(this.getAllRestaurants);
    RestaurantActions.fetchAllRestaurants();
  },

  getAllRestaurants() {
    this.setState({restaurants: RestaurantStore.all()})
  },

  render() {
    let restaurant_names = this.state.restaurants.map((restaurant) => {
      return (<RestaurantDisplayItem key={restaurant.id} restaurant={restaurant}></RestaurantDisplayItem>)
    });

    return (
      <section>{restaurant_names}</section>
    )
  }
});

module.exports = RestaurantDisplay;
