class RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.all
    #if bench is in map bounds, include it, otherwise disclude it.
    # THis will be implemented once map is in place
    render json: @restaurants
  end

  protected

  def restaurant_params
    params.permit(:restaurant).require(:name, :chef, :cuisine, :description, :capacity)
  end
end
