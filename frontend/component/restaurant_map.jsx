"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');


module.exports = React.createClass({
  getInitialState () {
    return {displayForm: false};
  },

  componentDidMount () {
    this.markers = {};
    this.highlightedId = null;
    this.displayForm = false;

    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    let mapOptions = {
      center: {lat: 0, lng: 0}, // this is SF
      zoom: 2,
      scrollwheel: false
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    // this.mapListener1 = google.maps.event.addListener(this.map, 'idle', this._handleIdle);
    this.mapListener2 = google.maps.event.addListener(this.map, 'click', this._openForm);
  },

  _openForm (coords) {
    this.clickLat = coords.latLng.lat();
    this.clickLng = coords.latLng.lng();
    this.setState({displayForm: true});
  },

  _closeForm () {
    this.setState({displayForm: false});
  },

  _handleIdle () {
    if (!this.storeListener) {
      this.storeListener = RestaurantStore.addListener(this._onChange);
    }
    RestaurantActions.fetchAllRestaurants(this.getBounds());
  },

  getBounds () {
    const bounds = this.map.getBounds();
    const northEast = bounds.getNorthEast();
    const southWest = bounds.getSouthWest();
    return {northEast: {lat: northEast.lat(), lng: northEast.lng()},
            southWest: {lat: southWest.lat(), lng: southWest.lng()}};
  },

  componentWillUnmount () {
    this.storeListener.remove();
    google.maps.event.removeListener(this.mapListener1);
    google.maps.event.removeListener(this.mapListener2);
  },

  _onChange () {
    // add new marks and record them
    const newMarkers = {};
    RestaurantStore.all().forEach(restaurant => {
      newMarkers[restaurant.id] = true;

      if (!this.markers[restaurant.id]) {
        const marker = this.addRestaurantMarker(restaurant);
        this.markers[restaurant.id] = marker;
      }
    });

    // remove markers for old restaurants
    Object.keys(this.markers).forEach(id => {
      if (this.markers[id] && !newMarkers[id]) {
        this.removeRestaurantMarker(id);
        this.markers[id] = null;
      }
    });

    this.unhighlightMarker();
    this.highlightMarker(RestaurantStore.highlightedId());
  },

  addRestaurantMarker (restaurant) {
    const pos = new google.maps.LatLng(restaurant.lat, restaurant.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      title: restaurant.name
    });
    this.restaurant_id = restaurant.id;
    // marker.addEventListener();
    this.mapMarkerListener = google.maps.event.addListener(marker, 'click', this.scrollToRestaurantInIndex);
    // put in a callback instead of the console log that either narrows the index or does..?
    return marker;
  },

  scrollToRestaurantInIndex() {
    console.log('testing');
  },

  removeRestaurantMarker (id) {
    // this.markers[id].removeListener();
    this.markers[id].setMap(null);
  },

  highlightMarker (id) {
    if (this.markers[id]) {
      // fade out all markers
      this.allMarkers().forEach(marker => marker.setOpacity(0.25));

      // highlight one
      this.markers[id].setOpacity(1.0);
      this.highlightedId = id;
    }
  },

  unhighlightMarker () {
    if (this.highlightedId) {
      this.allMarkers().forEach(marker => marker.setOpacity(1.0));
      this.highlightedId = null;
    }
  },

  allMarkers () {
    const markers = [];
    Object.keys(this.markers).forEach(id => {
      if (this.markers[id]) { markers.push(this.markers[id]); }
    });
    return markers;
  },

  render () {
    return (
      <div>
        <div className='map' ref='map'></div>
      </div>
    );
  }
});
