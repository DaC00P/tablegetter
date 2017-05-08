"use strict";

const React = require('react');
const Link = require('react-router').Link;
const ReactTooltip = require("react-tooltip");
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
          <div key={this.state.restaurant.id} className='row-show'>
            <ReactTooltip place="top" type="dark" effect="float"/>
            <div className='row-show-header'>
              Featured Chef: {this.state.restaurant.chef} of {this.state.restaurant.name}
            </div>
            <Link id='row-show-pic'
                  to={`/api/restaurants/${this.state.restaurant.id}`}
                  restaurantID={this.state.restaurant.id}>
                  <img className='chef-pic' src={this.state.restaurant.chef_pic_url}
                  data-tip="See Their Restaurant!"/>
            </Link>
          </div>
      );
  }

});

module.exports = RestaurantOfTheWeek;
