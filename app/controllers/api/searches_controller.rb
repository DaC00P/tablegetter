class Api::SearchesController < ApplicationController
  def search_for_restaurants(query)
    searched_for = []
    searched_for << Restaurant.where("name ILIKE ?", "%#{query}%")
    searched_for << Restaurant.where("chef ILIKE ?", "%#{query}%")
    searched_for << Restaurant.where("cuisine ILIKE ?", "%#{query}%")
    searched_for << Restaurant.where("city ILIKE ?", "%#{query}%")
    searched_for
  end

  def index
    @restaurants = search_for_restaurants(params[:query])
    render json: @restaurants.flatten
  end


end
