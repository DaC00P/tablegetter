"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const RestaurantDisplay = require('./restaurant_display');
const RestaurantMap = require('./restaurant_map');
const RestaurantActions = require('../actions/restaurant_actions');
const RestaurantStore = require('../stores/restaurant_store');
const SearchMapStore = require('../stores/search_map_store');
const RestaurantOfTheWeek = require('./restaurant_of_the_week');

const RestaurantDisplaySection = React.createClass({

  getInitialState() {
    return {
      searchActive: false
    };
  },

  componentWillMount() {
    RestaurantActions.fetchAllRestaurants();
    this.searchValue =  '';
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

  setSearchValue(value) {
    this.searchValue = value;
  },

  getSearchValue() {
    return this.searchValue;
  },

  render() {
    return (
      <section className='body-main'>
        <div className='body-left'>
          <RestaurantDisplay
            checkStore={this.checkStore}
            setMapBounds={this.setMapBounds}
            getMapBounds={this.getMapBounds}
            activateSearch={this.activateSearch}
            setSearchValue={this.setSearchValue}/>
        </div>
        <div className="body-right">
            <div className="map">
              <RestaurantMap
                checkStore={this.checkStore}
                setMapBounds={this.setMapBounds}
                activateSearch={this.activateSearch}
                checkSearchState={this.checkSearchState}
                getSearchValue={this.getSearchValue}/>
            </div>
            <div className='restaurant-of-week'>
              <RestaurantOfTheWeek />
            </div>
          </div>
      </section>
    );
  }
});

module.exports = RestaurantDisplaySection;
