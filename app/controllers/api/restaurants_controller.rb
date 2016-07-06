class Api::RestaurantsController < ApplicationController
  def index

    if params[:bounds]
      @restaurants = Restaurant.in_bounds(params[:bounds])
    else
      @restaurants = Restaurant.all
    end
    render json: @restaurants
  end
end
