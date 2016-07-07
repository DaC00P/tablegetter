# == Schema Information
#
# Table name: restaurants
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  chef         :string           not null
#  cuisine      :string           not null
#  description  :text             not null
#  lat          :float
#  lng          :float
#  capacity     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  city         :string
#  chef_pic_url :text
#

class Restaurant < ActiveRecord::Base
  validates :name, :chef, :cuisine, :description, :capacity, presence: true

  has_many :reservations,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Reservation

  has_many :reviews,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Review

  has_many :restaurant_pics,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :RestaurantPic

  def self.in_bounds(bounds)
    coords = [bounds[:northEast][:lat],
              bounds[:southWest][:lat],
              bounds[:northEast][:lng],
              bounds[:southWest][:lng]].map(&:to_f)
    Restaurant.where("lat < ? AND lat > ? AND lng < ? AND lng > ?", *coords)
  end
end
