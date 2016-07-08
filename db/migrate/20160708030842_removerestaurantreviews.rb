class Removerestaurantreviews < ActiveRecord::Migration
  def change
    remove_column :restaurants, :reviews
  end
end
