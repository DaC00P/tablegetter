const React = require('react');
const Link = require('react-router').Link;
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const ReactTooltip = require("react-tooltip");

const ImageTransformer = require('../constants/image_transformer');


const RestaurantDisplayItem = React.createClass({
  render() {
    let backgroundImageUrl = ImageTransformer.displayBackgroundPic(this.props.restaurant.restaurant_cover_pic);
    return (
      <div>
        <ReactTooltip place="top" type="dark" effect="float"/>
        <Link to={`/api/restaurants/${this.props.restaurant.id}`}
              data-tip="Pictures, Reviews, and Reservations"
              restaurantID={this.props.restaurant.id}>
          <section className='underlay' key={this.props.restaurant.id} style={{backgroundImage: `url(${backgroundImageUrl})`}}>
            <div>
              <div className="restaurant-details-simple">
                <div className="title-reviewsmore-div">
                  <div className='restaurant-name-header-simple'>
                    {this.props.restaurant.name}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Link>
      </div>
    );
  }
});

module.exports = RestaurantDisplayItem;
