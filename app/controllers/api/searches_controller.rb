class Api::SearchesController < ApplicationController

  def index
    bounds = params[:bounds]
    if bounds ##use bounds to search via map in addition to searchbar
      if bounds[:mapBoundsTwo] ##search via two sets of bounds if crossing the international date line(IDLs)
        @restaurants = Restaurant.search(params[:query]).in_bounds(params[:bounds][:mapBoundsOne])
        @restaurants += Restaurant.search(params[:query]).in_bounds(params[:bounds][:mapBoundsTwo])
      else ##just search using one set of bounds with no IDL
        @restaurants = Restaurant.search(params[:query]).in_bounds(params[:bounds][:mapBoundsOne])
      end
    else ##just search using the search bar
      @restaurants = Restaurant.search(params[:query])
    end
    render json: @restaurants.flatten
  end

end
