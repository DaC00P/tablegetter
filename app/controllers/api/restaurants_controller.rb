class Api::RestaurantsController < ApplicationController
  def index
    if params[:bounds]
      @restaurants = Restaurant.includes(:restaurant_pics).in_bounds(params[:bounds])
    else
      @restaurants = Restaurant.includes(:restaurant_pics).all
    end
    @restaurants
  end

  def show
    @restaurant = Restaurant.includes(:restaurant_pics)[params[:id]]
  end

end
