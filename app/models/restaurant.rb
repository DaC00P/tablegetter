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
    coords = adjustBoundsIfNecessary(coords)
    where("lat < ? AND lat > ? AND lng < ? AND lng > ?", *coords)
  end

  ##TODO && FIXME Create a DB column with a full text concat of all the other columns, then also search through that
  ## this stems from the 'blue barber' search not grabbing blue hill rest.
  scope :search, -> (query) do
    query = ["%#{query}%", "%#{query}%", "%#{query}%", "%#{query}%"]
    Restaurant.where("name ILIKE ? OR
                      chef ILIKE ? OR
                      cuisine ILIKE ? OR
                      city ILIKE ?",
                       *query )
  end

  protected
  ##FIXME this is still broken for going across the longitudinal date line. fuck.
  ##this adjusts the bounds in the case that the search is done across the date line
  def self.adjustBoundsIfNecessary(coords)
    if coords[2] < coords[3]
      coords[3] -= 360.0 if coords[3] > 0
      coords[2] += 360.0 if coords[3] < 0
    end
    coords
  end

end
