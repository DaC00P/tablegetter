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
    this.setState({restaurant: restaurantAndPics.restaurant, pics: restaurantAndPics.pics});
  },

  componentWillUnmount() {
    this.restaurantStoreListener.remove();
  },

  render() {

    let restaurantImage = {backgroundImage: `url(https://res.cloudinary.com/dldvsrho8/image/upload/v1467239803/chefstablemain2_yzp72y.jpg)`};

    let restaurantPics = [];
    let pics = this.state.pics;
    if (pics !== undefined){
      for (let i = 0; i < pics.length; i++) {
        restaurantPics.push(<div key={pics[i].id}>
                              <img src={pics[i].picture_url} style={{width: '200px', height: '200px'}}/>
                            </div>);
      }
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

        <section>
          <ul className='restaurant-show-page-details'>
            <li> Chef: {this.state.restaurant.chef} <img src={this.state.restaurant.chef_pic_url} alt={this.state.restaurant.chef}/></li>
            <li> Location: {this.state.restaurant.city}</li>
            <li> Cuisine: {this.state.restaurant.cuisine} </li>
            <li> About: {this.state.restaurant.description} </li>
          </ul>
        </section>

        <section className='restaurant-pics-index'>
          {restaurantPics}
        </section>
      </section>
    );
  }
});

module.exports = RestaurantShowPage;
