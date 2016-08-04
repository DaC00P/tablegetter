const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const RestaurantDisplayItem = require('./restaurant_display_item');
const SearchActions = require('../actions/search_actions');
// const Scroll = require('react-scroll');


const RestaurantDisplay = React.createClass({
  getInitialState() {
    return {restaurants: []};
  },

  componentWillMount() {
    this.restaurantListener = RestaurantStore.addListener(this.getAllRestaurants);
  },

  componentWillUnmount() {
    this.restaurantListener.remove();
  },

  getAllRestaurants() {
    this.setState({restaurants: RestaurantStore.all()});
  },

  searchForRestaurants(event) {
    event.preventDefault();
    SearchActions.searchForRestaurants(event.currentTarget.value);
  },

  render() {
    let restaurant_names;
    if (this.state.restaurants.length === 0){
      restaurant_names = (<h2 className="no-search-results">Apologies, no matching search results</h2>);
    }
    else {
      restaurant_names = this.state.restaurants.map((restaurant) => {
        return (<RestaurantDisplayItem key={restaurant.id} restaurant={restaurant}></RestaurantDisplayItem>);
      });
    }

    return (
      <section className="restaurant-index-and-search">
        <form className="navbar-form navbar-left" role="search" id='restaurant-searchbar'>
          <div className="form-group">
            <input onChange={this.searchForRestaurants} type="text" className="form-control" id="restaurant-filter" placeholder="Filter by Name, Chef, City or Cuisine"/>
          </div>
        </form>
        <section className="restaurant-index">{restaurant_names}</section>
      </section>
    );
  }
});

module.exports = RestaurantDisplay;
