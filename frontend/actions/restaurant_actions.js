"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;
const RestaurantApiUtil = require('../util/restaurant_util');


const RestaurantActions = {
  fetchAllRestaurants(bounds) {
    RestaurantApiUtil.fetchAllRestaurants(bounds, this.receiveAllRestaurants);
  },

  receiveAllRestaurants(restaurants) {
    AppDispatcher.dispatch({
      actionType: "receive_restaurants",
      restaurants: restaurants
    });
  },

  highlightRestaurant (id) {
    AppDispatcher.dispatch({
      actionType: "RESTAURANT_HIGHLIGHTED",
      id: id
    });
  },
  unhighlightRestaurant (id) {
    AppDispatcher.dispatch({
      actionType: "RESTAURANT_UNHIGHLIGHTED",
      id: id
    });
  },


  // receiveSingleRestaurant(restaurant) {
  //   AppDispatcher.dispatch({
  //     actionType: "receive_restaurant",
  //     restaurant: restaurant
  //   });
  // }

};

module.exports = RestaurantActions;
