class Createrestaurantreviews < ActiveRecord::Migration
  def change
    add_column :restaurants, :reviews, :text
  end
end
