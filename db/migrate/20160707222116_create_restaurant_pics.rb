class CreateRestaurantPics < ActiveRecord::Migration
  def change
    create_table :restaurant_pics do |t|
      t.integer :restaurant_id, null: false
      t.text :picture_url, null: false
      t.timestamps null: false
    end
  end
end
