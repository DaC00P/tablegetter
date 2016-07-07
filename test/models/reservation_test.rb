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

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
