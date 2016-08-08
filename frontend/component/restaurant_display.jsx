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


const RestaurantDisplay = React.createClass({
  getInitialState() {
    return {
      restaurants: [],
      searched: []
    };
  },

  componentWillMount() {
    this.restaurantListener = RestaurantStore.addListener(this.setStoretoDefault);
    this.searchListener = SearchMapStore.addListener(this.setStoreToSearch);
  },

  componentWillUnmount() {
    this.restaurantListener.remove();
    this.searchListener.remove();
  },

  setStoreToSearch() {
    this.setState({searched: SearchMapStore.all()});
  },

  setStoretoDefault() {
    this.setState({restaurants: RestaurantStore.all()});
  },

  searchForRestaurants(event) {
    event.preventDefault();
    if (event.currentTarget.value.length === 0) {
      SearchActions.searchForRestaurantsOnMapSearch('', this.props.getMapBounds());
    } else {
      this.props.activateSearch();
      SearchActions.searchForRestaurantsOnMapSearch(event.currentTarget.value, this.props.getMapBounds());
    }
  },

  restaurantSearchResults() {
    let restaurants;

    if(this.props.checkStore()){
      restaurants = this.state.searched;
    } else {
      restaurants = this.state.restaurants;
    }

    if (restaurants.length === 0){
      return (<h2 className="no-search-results">Apologies, no matching search results</h2>);
    }
    else {
      return restaurants.map((restaurant) => {
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
