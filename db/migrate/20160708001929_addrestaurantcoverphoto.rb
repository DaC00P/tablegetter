class Addrestaurantcoverphoto < ActiveRecord::Migration
  def change
    add_column :restaurants, :restaurant_cover_pic, :text
  end
end
