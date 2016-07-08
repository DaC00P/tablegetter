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

  receiveSearchResults(restaurants) {
    AppDispatcher.dispatch({
      actionType: "receive_restaurants",
      restaurants: restaurants
    });
  }
};

module.exports = SearchActions;