"use strict";

const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const RestaurantStore = new Store(AppDispatcher);

let _restaurants = {}

RestaurantStore.__onDispatch = function(payload) {
  switch (payload.actionType){
    case "receive_restaurants":
      resetAllRestaurants(payload.restaurants)
      break;
  }
}

RestaurantStore.all = function() {
  return Object.keys(_restaurants).map((key) => {return (_restaurants[key])})
};

RestaurantStore.find = function(id) {
  return Object.assign({}, _restaurants[id])
};

function resetAllRestaurants(restaurants) {
  _restaurants = restaurants;
  RestaurantStore.__emitChange();
}



module.exports = RestaurantStore;
