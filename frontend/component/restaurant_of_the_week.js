"use strict";

const React = require('react');
const Link = require('react-router').Link;
const RestaurantStore = require('../stores/restaurant_store');
const SearchMapStore = require('../stores/search_map_store');
const RestaurantActions = require('../actions/restaurant_actions');

const RestaurantOfTheWeek = React.createClass({
    getInitialState() {
      return {
        restaurant: {}
      }
    },

    componentWillMount() {
      this.restaurantListener = SearchMapStore.addListener(this.selectRestaurant);;
    },

    componentWillUnmount() {
      this.restaurantListener.remove();
    },

    selectRestaurant() {
      const restaurant = SearchMapStore.restaurantOfTheWeek();
      if(Object.keys(restaurant).length) {
        this.setState({
          restaurant: restaurant
        });
      };
    },

    render() {
      let backgroundImageUrl = this.state.restaurant.restaurant_cover_pic;
        return (
          <section key={this.state.restaurant.id} className='restaurant-details' style={{backgroundImage: `url(${backgroundImageUrl})`}}>
            <div className="restaurant-details-div">
                <Link to={`/api/restaurants/${this.state.restaurant.id}`} restaurantID={this.state.restaurant.id}>
                  <div className='restaurant-name-header'>
                    {this.state.restaurant.name}
                  </div>
                </Link>
            </div>
          </section>
      );
  }

});

module.exports = RestaurantOfTheWeek;
