class AddChefofweekToRestaurants < ActiveRecord::Migration
  def change
    add_column :restaurants, :chef_of_the_week, :string 
  end
end
