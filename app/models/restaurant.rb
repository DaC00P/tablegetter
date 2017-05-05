# == Schema Information
#
# Table name: restaurants
#
#  id                   :integer          not null, primary key
#  name                 :string           not null
#  chef                 :string           not null
#  cuisine              :string           not null
#  description          :text             not null
#  lat                  :float
#  lng                  :float
#  capacity             :integer          not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  city                 :string
#  chef_pic_url         :text
#  restaurant_cover_pic :text
#  reviews              :json
#  full_search_text     :text
#  search_vector        :tsvector
#

class Restaurant < ActiveRecord::Base
  validates :name, :chef, :cuisine, :description, :capacity, presence: true

  has_many :reservations,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Reservation

  has_many :restaurant_pics,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :RestaurantPic


  scope :in_bounds, -> (bounds) do
    coords = [bounds[:northEast][:lat],
              bounds[:southWest][:lat],
              bounds[:northEast][:lng],
              bounds[:southWest][:lng]].map(&:to_f)
    where("lat < ? AND lat > ? AND lng < ? AND lng > ?", *coords)
  end

  ##TODO optimize the DB column with a proper index
  scope :search, -> (query) do
    query = ["%#{query}%", "%#{query}%", "%#{query}%", "%#{query}%"]
    Restaurant.where("name ILIKE ? OR
                      chef ILIKE ? OR
                      cuisine ILIKE ? OR
                      city ILIKE ?",
                       *query )
  end

  scope :full_search, -> (query) do
    Restaurant.full_search_method(query)
  end

  scope :change_chef, -> do
    Restaurant.change_chef_ofthe_week
  end

  def self.change_chef_ofthe_week
    prior_restaurant = Restaurant.where("chef_of_the_week = 'true'")
    if prior_restaurant.exists?
      prior_restaurant[0].update(chef_of_the_week: "false")
    end
    Restaurant.update(rand(1..Restaurant.count), chef_of_the_week: "true")
  end


  def self.full_search_method(query)
    sanitized_query = sanitize_sql_array(["plainto_tsquery(?)", query])
    sql_query = <<-SQL
      full_search_text @@ #{sanitized_query}
    SQL
    Restaurant.where(sql_query)
  end

end
