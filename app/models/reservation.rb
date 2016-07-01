# == Schema Information
#
# Table name: reservations
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  description   :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  date          :datetime
#  time          :string
#

class Reservation < ActiveRecord::Base
  validates :user_id, :restaurant_id, :date, presence: true
  # validate :does_not_overlap_reservations

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :restaurant,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Restaurant

  def overlapping_date_requests
    Reservation.where.not(id: self.id).where(restaurant_id: restaurant_id).where(date: self.date.to_date)
  end

  def overlapping_time_requests
    Reservation.where.not(id: self.id).where(restaurant_id: restaurant_id).where(date: self.time)
  end

  def does_not_overlap_reservations
    unless overlapping_date_requests.empty? && overlapping_time_requests.empty?
      errors[:base] << "Request conflicts with existing approved request"
    end
  end
end