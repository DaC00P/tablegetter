"use strict";

const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const RestaurantStore = new Store(AppDispatcher);


let _restaurants = {};
let _highlightedId = null;


RestaurantStore.__onDispatch = function(payload) {
  switch (payload.actionType){
    case "receive_restaurants":
      resetAllRestaurants(payload.restaurants);
      break;
    case "RESTAURANT_HIGHLIGHTED":
      highlightRestaurant(payload.id);
      break;
    case "RESTAURANT_UNHIGHLIGHTED":
      unhighlightRestaurant(payload.id);
      break;
  }
};

RestaurantStore.all = function() {
  return Object.keys(_restaurants).map((key) => {return (_restaurants[key]);});
};

RestaurantStore.highlightedId = function () {
  return _highlightedId;
};

RestaurantStore.restaurantOfTheWeek = function () {
  let length = Object.keys(_restaurants).length;
  let singleRestaurant = {};
  if(length) {
    for (var restaurant in _restaurants) {
        if (_restaurants.hasOwnProperty(restaurant)) {
          let sub_restaurant = _restaurants[restaurant];
          if(sub_restaurant.chef_of_the_week === 'true'){
            singleRestaurant = sub_restaurant;
          };
        };
    };
  };
  return singleRestaurant;
};

function highlightRestaurant (id) {
  if (_restaurants[id]) {
    _highlightedId = id;
  }
  RestaurantStore.__emitChange();
}

function unhighlightRestaurant (id) {
  _highlightedId = null;
  RestaurantStore.__emitChange();
}

function resetAllRestaurants(restaurants) {
    _restaurants = {};
    for (let i = 0; i < restaurants.length; i++) {
      _restaurants[restaurants[i].id] = restaurants[i];
    }
  RestaurantStore.__emitChange();
}

RestaurantStore.find = function(id) {
  // return {restaurant: _restaurants[id], pics: _pics, reviews: _reviews};
};

RestaurantStore.findByID = function(id) {
  return _restaurants[id];
};



module.exports = RestaurantStore;
