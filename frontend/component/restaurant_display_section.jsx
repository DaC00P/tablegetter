"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const RestaurantDisplay = require('./restaurant_display');
const RestaurantMap = require('./restaurant_map');
const RestaurantActions = require('../actions/restaurant_actions');

const RestaurantDisplaySection = React.createClass({

  componentWillMount() {
    RestaurantActions.fetchAllRestaurants();
  },

  render() {
    return (
      <section className="map-details-combo clearfix">
        <RestaurantMap/>
        <RestaurantDisplay/>
      </section>
    );
  }
});

module.exports = RestaurantDisplaySection;
