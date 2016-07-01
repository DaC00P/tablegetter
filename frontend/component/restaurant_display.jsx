const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const RestaurantDetailBox = require('./restaurant_detail_box')
const ReviewBox = require('./restaurant_review_box')


const RestaurantDisplay = React.createClass({
  render() {
    return (
      <section className='restaurant-details'>
        <h2 className='restaurant-name-header'>Restaurant Name</h2>
        <RestaurantDetailBox/ >
            <button type='button' className="dropdown-toggle" data-toggle="dropdown"> Dropdown</button>
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
    )
  }
});

module.exports = RestaurantDisplay;
