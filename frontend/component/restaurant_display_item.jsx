const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const RestaurantDetailBox = require('./restaurant_detail_box');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const ReactTooltip = require("react-tooltip");
const ImageTransformer = require('../constants/image_transformer');


const RestaurantDisplayItem = React.createClass({

  _onMouseEnter () {
     RestaurantActions.highlightRestaurant(this.props.restaurant.id);
   },

   _onMouseLeave () {
     RestaurantActions.unhighlightRestaurant(this.props.restaurant.id);
   },

  render() {
    let backgroundImageUrl = ImageTransformer.displayItemBackgroundPic(this.props.restaurant.restaurant_cover_pic);
    return (
      <section key={this.props.restaurant.id} className='restaurant-details' style={{backgroundImage: `url(${backgroundImageUrl})`}}  onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>
        <div className="restaurant-details-div">

          <div className="title-reviewsmore-div">
            <Link to={`/api/restaurants/${this.props.restaurant.id}`} restaurantID={this.props.restaurant.id}>
              <h2 className='restaurant-name-header'>
                <ReactTooltip place="top" type="dark" effect="float"/>
                <p className='restaurant-name-header' data-tip="Pictures & Reviews">{this.props.restaurant.name}</p>
              </h2>
            </Link>
          </div>

          <RestaurantDetailBox restaurant={this.props.restaurant}/ >
        </div>
      </section>
    );
  }
});

module.exports = RestaurantDisplayItem;
