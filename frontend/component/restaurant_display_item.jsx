const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const RestaurantDetailBox = require('./restaurant_detail_box');
const ReviewBox = require('./restaurant_review_box');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;


const RestaurantDisplayItem = React.createClass({

  _onMouseEnter () {
     RestaurantActions.highlightRestaurant(this.props.restaurant.id);
   },

   _onMouseLeave () {
     RestaurantActions.unhighlightRestaurant(this.props.restaurant.id);
   },

   showRestaurant() {
     hashHistory.push(`/api/restaurants/${this.props.restaurant.id}`);
   },

   showToolTip() {
     $('.tooltip').addClass("jq");
   },

   removeToolTip() {
     $('.tooltip').removeClass("jq");
   },

  render() {
    return (
      <section className='restaurant-details' style={{backgroundImage: `url(${this.props.restaurant.restaurant_cover_pic})`}}  onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>
        <div className="restaurant-details-div">

          <div className="title-reviewsmore-div">

              <h2 className='restaurant-name-header' onClick={this.showRestaurant} onMouseEnter={this.showToolTip} onMouseLeave={this.removeToolTip}>
                {this.props.restaurant.name}
                <a className="tooltip" onClick={this.showRestaurant} title="Pictures & Reviews" href="#"></a>
              </h2>


          </div>

          <RestaurantDetailBox restaurant={this.props.restaurant}/ >
        </div>
      </section>
    );
  }
});

module.exports = RestaurantDisplayItem;
