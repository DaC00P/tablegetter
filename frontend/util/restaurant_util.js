"use strict";

const RestaurantStore = require('../stores/restaurant_store');

const RestaurantUtil = {
  fetchAllRestaurants(bounds, callback){
    $.ajax({
      method: "GET",
      url: 'api/restaurants',
      data: {bounds: bounds},
      success(response) {
        callback(response);
      }
    }
   );
  },
};

module.exports = RestaurantUtil;
