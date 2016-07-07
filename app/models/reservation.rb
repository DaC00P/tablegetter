# == Schema Information
#
# Table name: reservations
#
#  id                   :integer          not null, primary key
#  user_id              :integer          not null
#  restaurant_id        :integer          not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  time                 :string
#  party_size           :integer
#  allergies            :text
#  special_instructions :text
#  date                 :string
#

class Reservation < ActiveRecord::Base
  validates :user_id, :restaurant_id, :date, :time, :party_size, presence: true

  validate :over_capacity?

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :restaurant,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Restaurant

  protected

  def over_capacity?
    x = (Reservation.where(restaurant_id: self.restaurant_id).where(time: self.time).where(date: self.date).sum(:party_size) + self.party_size) <= Restaurant.where(id: self.restaurant_id).first.capacity
    unless x
      errors[:base] << "Request conflicts with existing approved request"
    end
  end
end
