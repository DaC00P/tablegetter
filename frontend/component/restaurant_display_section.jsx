"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const RestaurantDisplay = require('./restaurant_display');
const RestaurantMap = require('./restaurant_map');
const RestaurantActions = require('../actions/restaurant_actions');
const RestaurantStore = require('../stores/restaurant_store');
const SearchMapStore = require('../stores/search_map_store');

const RestaurantDisplaySection = React.createClass({

  getInitialState() {
    return {
      searchActive: false
    };
  },

  componentWillMount() {
    RestaurantActions.fetchAllRestaurants();
  },

  checkStore() {
    if (this.state.searchActive) {
      return true;
    }
    else {
      return false;
    }
  },

  setMapBounds(bounds) {
    this.mapBounds = bounds;
    return;
  },

  getMapBounds() {
    return this.mapBounds;
  },

  activateSearch(){
    this.setState({searchActive: true});
  },

  checkSearchState() {
    return this.state.searchActive;
  },

  render() {
    return (
      <section className="map-details-combo clearfix">
        <RestaurantMap checkStore={this.checkStore} setMapBounds={this.setMapBounds} activateSearch={this.activateSearch} checkSearchState={this.checkSearchState}/>
        <RestaurantDisplay checkStore={this.checkStore} setMapBounds={this.setMapBounds} getMapBounds={this.getMapBounds} activateSearch={this.activateSearch}/>
      </section>
    );
  }
});

module.exports = RestaurantDisplaySection;
