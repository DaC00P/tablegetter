class Addcitytorestaurant < ActiveRecord::Migration
  def change
    add_column :restaurants, :city, :string
  end
end
