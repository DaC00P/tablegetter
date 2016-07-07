"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const RestaurantDisplay = require('./restaurant_display');
const RestaurantMap = require('./restaurant_map');

const RestaurantDisplaySection = React.createClass({

  render() {
    return (
      <section className="map-details-combo">
        <RestaurantMap/>
        <RestaurantDisplay/>
      </section>
    );
  }
});

module.exports = RestaurantDisplaySection;
