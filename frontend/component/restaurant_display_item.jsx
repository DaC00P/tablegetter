const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const RestaurantDetailBox = require('./restaurant_detail_box');
const ReviewBox = require('./restaurant_review_box');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');


const RestaurantDisplayItem = React.createClass({

  _onMouseEnter () {
     RestaurantActions.highlightRestaurant(this.props.restaurant.id);
   },

   _onMouseLeave () {
     RestaurantActions.unhighlightRestaurant(this.props.restaurant.id);
   },

  render() {
    return (
      <section className='restaurant-details'  onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>
        <h2 className='restaurant-name-header'>{this.props.restaurant.name}</h2>
        <RestaurantDetailBox restaurant={this.props.restaurant}/ >
            <button type='button' className="dropdown-toggle" data-toggle="dropdown"> Pictures and Reviews</button>
            <div className="dropdown-menu" role="menu" id="restaurant-dropdown">
              <section className = "restaurant-pictures">
                <img className="dropdown-food-pic" src="http://res.cloudinary.com/dldvsrho8/image/upload/v1467328339/Tropical-Fruit-2000x1717_iqltvu.jpg" alt="FOODPORN"/>
                <img className="dropdown-food-pic" src="http://res.cloudinary.com/dldvsrho8/image/upload/v1467328339/Tropical-Fruit-2000x1717_iqltvu.jpg" alt="FOODPORN"/>
                <img className="dropdown-food-pic" src="http://res.cloudinary.com/dldvsrho8/image/upload/v1467328339/Tropical-Fruit-2000x1717_iqltvu.jpg" alt="FOODPORN"/>
                <img className="dropdown-food-pic" src="http://res.cloudinary.com/dldvsrho8/image/upload/v1467328339/Tropical-Fruit-2000x1717_iqltvu.jpg" alt="FOODPORN"/>
                <ReviewBox/>
            </section>
            </div>

      </section>
    );
  }
});

module.exports = RestaurantDisplayItem;
