class Review < ActiveRecord::Base
  belongs_to :restaurant,
  primary_key: :id,
  foreign_key: :restaurant,
  class_name: :Restaurant
end
