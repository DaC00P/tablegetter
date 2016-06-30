# == Schema Information
#
# Table name: reservations
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  datetime      :string           not null
#  description   :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Reservation < ActiveRecord::Base
  validates :user_id, :restaurant_id, :datetime, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :restaurant,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Restaurant

end
