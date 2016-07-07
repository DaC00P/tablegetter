class RestaurantPic < ActiveRecord::Base
  validates :restaurant_id, :picture_url, presence: true

  belongs_to :restaurant,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Restaurant
end
