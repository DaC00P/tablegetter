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

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
