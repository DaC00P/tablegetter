# == Schema Information
#
# Table name: restaurants
#
#  id                   :integer          not null, primary key
#  name                 :string           not null
#  chef                 :string           not null
#  cuisine              :string           not null
#  description          :text             not null
#  lat                  :float
#  lng                  :float
#  capacity             :integer          not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  city                 :string
#  chef_pic_url         :text
#  restaurant_cover_pic :text
#  reviews              :json
#  full_search_text     :tsvector
#

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
