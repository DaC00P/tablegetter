class Api::SearchesController < ApplicationController

  def index
    if params[:bounds]
      @restaurants = Restaurant.search(params[:query]).in_bounds(params[:bounds])
    else
      @restaurants = Restaurant.search(params[:query])
    end
    render json: @restaurants.flatten
  end

end
