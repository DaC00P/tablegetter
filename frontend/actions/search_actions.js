"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;
const SearchUtil = require('../util/search_util');


const SearchActions = {
  searchForRestaurants(query) {
    SearchUtil.getSearchResults(query, this.receiveSearchResults);
  },

  searchForRestaurantsOnMap(bounds) {
    SearchUtil.getSearchResultsOnMap(bounds, this.receiveSearchResults);
  },

  searchForRestaurantsOnMapSearch(query, bounds) {
    SearchUtil.getSearchResultsOnMapSearch(query, bounds, this.receiveSearchResults);
  },

  receiveSearchResults(restaurants) {
    AppDispatcher.dispatch({
      actionType: "receive_searched_restaurants",
      restaurants: restaurants
    });
  }
};

module.exports = SearchActions;
