class Api::SearchesController < ApplicationController
  def search_for_restaurants(query)
    searched_for = []
    searched_for << Restaurant.where("name LIKE ? OR name LIKE ?", "%#{query.capitalize}%", "%#{query}%")
    searched_for << Restaurant.where("chef LIKE ? OR chef LIKE ?", "%#{query.capitalize}%", "%#{query}%")
    searched_for << Restaurant.where("cuisine LIKE ? OR cuisine LIKE ?", "%#{query.capitalize}%", "%#{query}%")
    # searched_for << Restaurant.where(query[:city])
    searched_for
  end

  def index
    @restaurants = search_for_restaurants(params[:query])
    render json: @restaurants.flatten
  end


end
