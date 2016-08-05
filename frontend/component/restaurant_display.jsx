const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const RestaurantDisplayItem = require('./restaurant_display_item');
const SearchActions = require('../actions/search_actions');
const SearchMapStore = require('../stores/search_map_store');
const Map = require('./restaurant_map');
// const Scroll = require('react-scroll');


const RestaurantDisplay = React.createClass({
  getInitialState() {
    return {
      restaurants: [],
      searchStatus: false,
      mapChanged: false
    };
  },

  componentWillMount() {
    this.restaurantListener = RestaurantStore.addListener(this.getAllRestaurants);

  },

  componentWillUnmount() {
    this.restaurantListener.remove();
  },

  getAllRestaurants() {
    if (this.state.searchStatus || this.state.mapChanged){
      this.setState({restaurants: SearchMapStore.all()});
    }
    else {
      this.setState({restaurants: RestaurantStore.all()});
    }
  },

  setMapState() {
    let mapChanged = false;
    this.setState({mapChanged: mapChanged});
  },

  searchForRestaurants(event) {
    event.preventDefault();
    this.setSearchState(event);
    SearchActions.searchForRestaurants(event.currentTarget.value);
  },

  setSearchState(event){
    if (event.target.value.length > 0){
      this.setState({searchStatus: true});
    }
    else {
      this.setState({searchStatus: false});
    }
  },

  restaurantSearchResults() {
    if (this.state.restaurants.length === 0){
      return (<h2 className="no-search-results">Apologies, no matching search results</h2>);
    }
    else {
      return this.state.restaurants.map((restaurant) => {
        return (<RestaurantDisplayItem key={restaurant.id} restaurant={restaurant}></RestaurantDisplayItem>);
      });
    }
  },

  render() {

    let restaurant_names = this.restaurantSearchResults();

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
