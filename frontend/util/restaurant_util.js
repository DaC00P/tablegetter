"use strict";

const RestaurantStore = require('../stores/restaurant_store');

const RestaurantUtil = {
  fetchAllRestaurants(success){
    $.get('api/restaurants', success);
  },
};

module.exports = RestaurantUtil;
