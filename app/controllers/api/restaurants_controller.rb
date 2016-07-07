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
    render json: {restaurant: @restaurant, pics: @pics}
  end
end
