"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const ReservationActions = require('../actions/reservation_actions');
const ImageTransformer = require('../constants/image_transformer');

const RestaurantShowPage = React.createClass({

  getInitialState() {
    return ({restaurant: {}});
  },

  componentWillMount() {
    this.restaurantStoreListener = RestaurantStore.addListener(this.setCurrentRestaurant);
    RestaurantActions.fetchAllRestaurants();
  },

  setCurrentRestaurant() {
    const restaurant = RestaurantStore.findByID(this.props.params.id);
    this.setState({restaurant: restaurant, pics: restaurant.restaurant_pics, reviews: restaurant.reviews});
  },

  componentWillUnmount() {
    this.restaurantStoreListener.remove();
  },

  render() {
    let restaurantImage = {backgroundImage: `url(${this.state.restaurant.restaurant_cover_pic})`};

    let restaurantPics = [];
    let pics = this.state.pics;
    if (pics !== undefined){
      for (let i = 0; i < pics.length; i++) {
        let url = ImageTransformer.showPagefoodPic(pics[i].picture_url, 350, 350);
        restaurantPics.push(<div key={pics[i].id}>
                              <img key={pics[i].id + 1000} className="restaurant-detail-pic"src={url} style={{width: '200px', height: '200px'}}/>
                            </div>);
      }
    }

    let restaurantReviews = [];
    if (this.state.reviews !== undefined) {
      let review1 = this.state.reviews.review1;
      let review2 = this.state.reviews.review2;
      restaurantReviews.push(
        <pre>
          <span key='1' className="fancy-span">Julia Child Says: </span> {review1}
        </pre>
      );
      restaurantReviews.push(
        <pre>
          <span key='2' className="fancy-span"> Anton Ego Says: </span> {review2}
        </pre>

      );
    }

    return (
      <section>
        <section className="restaurant-show-page">
            <div style={restaurantImage} key={restaurantImage.id} className='restaurant-bg'>
              <section className='header-text show-header-text'>
                <h1 className="site-title-text">{this.state.restaurant.name}</h1>
                <h4 className="site-marketing-text">{this.state.restaurant.description}</h4>
                </section>
            </div>
        </section>

        <section className="restaurant-detail-bar">
          <div>
            <img className='chef-pic' src={this.state.restaurant.chef_pic_url} alt={this.state.restaurant.chef}/>
          </div>
          <ul className='restaurant-show-page-details'>
            <li>  <span className="fancy-span" >{this.state.restaurant.chef}</span> Chef</li>
            <li>  <span className="fancy-span" >{this.state.restaurant.city}</span> Location</li>
            <li>  <span className="fancy-span" >{this.state.restaurant.cuisine}</span> Cuisine</li>
          </ul>
        </section>

        <section className='restaurant-pics-index' key='pics'>
          {restaurantPics}
        </section>

        <section className='restaurant-review-section' key='reviews'>
          <h2>Reviews</h2>
          {restaurantReviews}
        </section>
      </section>
    );
  }
});

module.exports = RestaurantShowPage;
