# noinspection RailsChecklist01
class Api::SearchesController < ApplicationController


  #search longer than necessary to accomodate front end
  def index
    bounds = params[:bounds]

    if bounds ##search via two sets of bounds in addition to searchbar if crossing the international date line(IDLs)
      if bounds[:mapBoundsTwo] ##mapBoundsTwo will be there if user has crossed IDL
        @restaurants = Restaurant.full_search(params[:query]).in_bounds(params[:bounds][:mapBoundsOne])
        @restaurants += Restaurant.full_search(params[:query]).in_bounds(params[:bounds][:mapBoundsTwo])
      else ##just search using one set of bounds with no IDL
        if params[:query].length == 0
          @restaurants = Restaurant.in_bounds(params[:bounds][:mapBoundsOne])
        else
          @restaurants = Restaurant.full_search(params[:query]).in_bounds(params[:bounds][:mapBoundsOne])
        end
      end
    else ##just search using the search bar
      if params[:query].length == 0
        @restaurants = Restaurant.all
      else
        @restaurants = Restaurant.full_search(params[:query])
      end
    end

    #use a standard ILIKE search on relevant fields if no restaurants are returned from PG full text search
    if @restaurants.empty?
      queries = params[:query].split(' ')
      if queries.length > 1
        queries.each do |single_query|
          @restaurants += Restaurant.search(single_query)
        end
      else
        @restaurants = Restaurant.search(params[:query])
      end

    end


    render json: @restaurants.flatten
  end

end
