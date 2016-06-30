# == Schema Information
#
# Table name: restaurants
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  chef        :string           not null
#  cuisine     :string           not null
#  description :text             not null
#  lat         :float
#  lng         :float
#  capacity    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
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
end
