# == Schema Information
#
# Table name: restaurant_pics
#
#  id            :integer          not null, primary key
#  restaurant_id :integer          not null
#  picture_url   :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class RestaurantPic < ActiveRecord::Base
  validates :restaurant_id, :picture_url, presence: true

  belongs_to :restaurant,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Restaurant
end
