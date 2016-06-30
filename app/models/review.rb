# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  title         :string           not null
#  description   :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ActiveRecord::Base
  belongs_to :restaurant,
  primary_key: :id,
  foreign_key: :restaurant,
  class_name: :Restaurant

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
end
