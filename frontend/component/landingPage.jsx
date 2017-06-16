"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');

const RestaurantActions = require('../actions/restaurant_actions');
const RestaurantOfTheWeek = require('./restaurant_of_the_week');
const RestaurantStore = require('../stores/restaurant_store');
const SimpleRestaurantDisplayItem = require('./simpleRestaurantDisplay');

const LandingPage = React.createClass({
  getInitialState(){
    return {
      restaurants: []
    }
  },

  componentWillMount() {
    this.restaurantListener = RestaurantStore.addListener(this.setRestaurants);
    RestaurantActions.fetchAllRestaurants();
  },

  componentWillUnmount(){
    this.restaurantListener.remove();
  },

  setRestaurants(){
    this.setState({restaurants: RestaurantStore.all()});
  },

  render() {
    return (
      <div className='all-restaurants'>
          {this.state.restaurants.map((restaurant)=>{
            return (<SimpleRestaurantDisplayItem key={restaurant.id}
                                                 restaurant={restaurant}>
                    </SimpleRestaurantDisplayItem>);
           })}
      </div>
    );
  }
});

module.exports = LandingPage;
