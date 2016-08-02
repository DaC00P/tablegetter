class Api::SearchesController < ApplicationController

  def index
    @restaurants = search_for_restaurants(params[:query])
    render json: @restaurants.flatten
  end

  protected

  def search_for_restaurants(query)
    query = ["%#{query}%", "%#{query}%", "%#{query}%", "%#{query}%"]
    Restaurant.where("name ILIKE ? OR
                      chef ILIKE ? OR
                      cuisine ILIKE ? OR
                      city ILIKE ?",
                       *query )
  end

end
