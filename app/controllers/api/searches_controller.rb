class Api::SearchesController < ApplicationController

  def index
    bounds = params[:bounds]
    if bounds ##use bounds to search via map in addition to searchbar
      if bounds[:mapBoundsTwo]
        @restaurants = Restaurant.search(params[:query]).in_bounds(params[:bounds][:mapBoundsOne])
        @restaurants += Restaurant.search(params[:query]).in_bounds(params[:bounds][:mapBoundsTwo])
      else
        @restaurants = Restaurant.search(params[:query]).in_bounds(params[:bounds][:mapBoundsOne])
      end
    else ##just search using the search bar
      @restaurants = Restaurant.search(params[:query])
    end
    render json: @restaurants.flatten
  end

end
