"use strict";

const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const RestaurantStore = new Store(AppDispatcher);


let _restaurants = {};
let _highlightedId = null;
let _pics = {};
let _reviews = {};


RestaurantStore.__onDispatch = function(payload) {
  switch (payload.actionType){
    case "receive_restaurants":
      resetAllRestaurants(payload.restaurants);
      break;
    case "receive_restaurant":
      resetToSingleRestaurant(payload.restaurant.restaurant);
      resetSingleRestaurantPics(payload.restaurant.pics);
      resetSingleRestaurantReviews(payload.restaurant.reviews);
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

function resetToSingleRestaurant(restaurant) {
  _restaurants = restaurant;
  RestaurantStore.__emitChange();
}

function resetSingleRestaurantPics(pics) {
  _pics = pics;
  RestaurantStore.__emitChange();
}

function resetSingleRestaurantReviews(reviews) {
  _reviews = reviews;
  RestaurantStore.__emitChange();
}

RestaurantStore.find = function() {
  return {restaurant: _restaurants, pics: _pics, reviews: _reviews};
};



module.exports = RestaurantStore;
