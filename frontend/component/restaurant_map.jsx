"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const SearchMapStore = require('../stores/restaurant_store');
const SearchActions = require('../actions/search_actions');
const RestaurantDisplay = require('./restaurant_display');


module.exports = React.createClass({
  getInitialState () {
    return {
      displayForm: false,
      storeToUse: "restaurantStore"
    };
  },

  componentDidMount () {
    this.markers = {};
    this.highlightedId = null;
    this.displayForm = false;

    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    let mapOptions = {
      center: {lat: 30, lng: -40},
      zoom: 2,
      scrollwheel: false
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.mapListener1 = google.maps.event.addListener(this.map, 'idle', this._handleIdle);
    if (!this.defaultStoreListener) {
      this.defaultStoreListener = RestaurantStore.addListener(this._onChange);
    }
    this.mapListener2 = google.maps.event.addListener(this.map, 'bounds_changed', this._handleSearch);
  },

  _handleIdle() {
    if (!this.searchStoreListener) {
      this.searchStoreListener = SearchMapStore.addListener(this._onChange);
    }
  },

  _handleSearch() {
    this.props.setMapBounds(this.getMapBounds());
    this.props.activateSearch();
    SearchActions.searchForRestaurantsOnMapSearch(this.props.getSearchValue(), this.getMapBounds());
  },

  getMapBounds() {
    let latsw, latne, lngsw, lngne;
    let boolDateLineHandle;
    const self = this;
    let mapBoundsOne, mapBoundsTwo;

    let getBounds = function () {
      const bounds = self.map.getBounds();
      const northEast = bounds.getNorthEast();
      const southWest = bounds.getSouthWest();

      latsw = southWest.lat();
      latne = northEast.lat();
      lngsw = southWest.lng();
      lngne = northEast.lng();

      if (lngsw > lngne) {
        boolDateLineHandle = true;
      }

    };

    let getData = function () {
      let saveLngSW = lngsw;
      let saveLngNE = lngne;

      getBounds();
      self.map.setCenter(self.map.getCenter(), self.map.getZoom());

      if (boolDateLineHandle) {
        lngsw = -179.999;
      }

      mapBoundsOne = {northEast: {lat: latne, lng: lngne},
      southWest: {lat: latsw, lng: lngsw}};

      if (boolDateLineHandle) {
        lngsw = saveLngSW;
        lngne = 180.000;

        mapBoundsTwo = {northEast: {lat: latne, lng: lngne},
        southWest: {lat: latsw, lng: lngsw}};
      }
    };

    getBounds();
    getData();

    if (mapBoundsTwo) {
      return {mapBoundsOne: mapBoundsOne, mapBoundsTwo: mapBoundsTwo};
    }
    else {
      return {mapBoundsOne: mapBoundsOne};
    }
  },

  componentWillUnmount () {
    this.defaultStoreListener.remove();
    this.searchStoreListener.remove();
    google.maps.event.removeListener(this.mapListener1);
    google.maps.event.removeListener(this.mapListener2);
  },

  _onChange () {
    let restaurants;
    let _store;
    if (this.props.checkSearchState()) {
      restaurants = RestaurantStore.all();
    } else {
      restaurants = SearchMapStore.all();
    }
    // add new marks and record them
    const newMarkers = {};
    restaurants.forEach(restaurant => {
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
    if (this.props.checkSearchState()) {
      this.highlightMarker(SearchMapStore.highlightedId());
    } else {
      this.highlightMarker(RestaurantStore.highlightedId());
    }
  },

  addRestaurantMarker (restaurant) {
    const pos = new google.maps.LatLng(restaurant.lat, restaurant.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      title: restaurant.name,
      icon: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
    });
    this.restaurant_id = restaurant.id;
    // marker.addEventListener();
    // this.mapMarkerListener = google.maps.event.addListener(marker, 'click', this.scrollToRestaurantInIndex);
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
      this.markers[id].icon = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
      this.highlightedId = id;
    }
  },

  unhighlightMarker () {
    if (this.highlightedId) {
      this.allMarkers().forEach(marker => {
        marker.setOpacity(1.0);
        marker.icon = 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
      });
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
