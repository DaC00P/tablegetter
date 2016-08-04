class Createrestaurantreviews2 < ActiveRecord::Migration
  def change
    add_column :restaurants, :reviews, :json
  end
end
