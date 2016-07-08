class Api::RestaurantsController < ApplicationController
  def index
    if params[:bounds]
      @restaurants = Restaurant.in_bounds(params[:bounds])
    else
      @restaurants = Restaurant.all
    end
    render json: @restaurants
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    @pics = RestaurantPic.where(restaurant_id: params[:id])
    @reviews = split_reviews(@restaurant.reviews)
    render json: {restaurant: @restaurant, pics: @pics, reviews: @reviews}
  end

  def split_reviews(reviews)
    reviews = reviews.split('666')
    both_reviews = {review1: reviews[0], review2: reviews[1]}
    return both_reviews
  end
end
