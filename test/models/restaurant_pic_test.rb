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

require 'test_helper'

class RestaurantPicTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
