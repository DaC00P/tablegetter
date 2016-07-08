"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');

const RestaurantShowPage = React.createClass({

  getInitialState() {
    return ({restaurant: {}});
  },

  getCurrentRestaurant() {
    RestaurantActions.fetchSingleRestaurant(this.props.location.pathname.slice(-2));
  },

  componentDidMount() {
    this.restaurantStoreListener = RestaurantStore.addListener(this.setCurrentRestaurant);
    this.getCurrentRestaurant();
  },

  setCurrentRestaurant() {
    let restaurantAndPics = RestaurantStore.find();
    this.setState({restaurant: restaurantAndPics.restaurant, pics: restaurantAndPics.pics, reviews: restaurantAndPics.reviews});
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
        restaurantPics.push(<div key={pics[i].id}>
                              <img className="restaurant-detail-pic"src={pics[i].picture_url} style={{width: '200px', height: '200px'}}/>
                            </div>);
      }
    }

    let restaurantReviews = [];
    if (this.state.reviews !== undefined) {
      let review1 = this.state.reviews.review1;
      let review2 = this.state.reviews.review2;
      restaurantReviews.push(
        <p>
          {review1}
          <br></br>
          <br></br>
          {review2}
        </p>
      );
    }

    return (
      <section>
        <section className="restaurant-show-page">
          <br></br>
            <div style={restaurantImage} className='restaurant-bg'>
              <section className='header-text'>
                <h1 className="site-title-text">{this.state.restaurant.name}</h1>
                <h4 className="site-marketing-text">{this.state.restaurant.description}</h4>
                </section>
            </div>
        </section>

        <section className="restaurant-detail-bar">
          <div>
            <img src={this.state.restaurant.chef_pic_url} alt={this.state.restaurant.chef}/>
          </div>
          <ul className='restaurant-show-page-details'>
            <li> Chef: {this.state.restaurant.chef} </li>
            <li> Location: {this.state.restaurant.city}</li>
            <li> Cuisine: {this.state.restaurant.cuisine} </li>
            <li> About: {this.state.restaurant.description} </li>
          </ul>
        </section>

        <section className='restaurant-pics-index'>
          {restaurantPics}
        </section>

        <section className='review-section'>
          <h2>Reviews</h2>
          {restaurantReviews}
        </section>
      </section>
    );
  }
});

module.exports = RestaurantShowPage;