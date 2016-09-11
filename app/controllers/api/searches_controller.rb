class Api::SearchesController < ApplicationController

  def index
    if params[:bounds] ##use bounds to search via map in addition to searchbar
      @restaurants = Restaurant.search(params[:query]).in_bounds(params[:bounds])
    else ##just search using the search bar
      @restaurants = Restaurant.search(params[:query])
    end
    render json: @restaurants.flatten
  end

end
