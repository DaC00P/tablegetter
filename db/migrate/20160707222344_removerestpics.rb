class Removerestpics < ActiveRecord::Migration
  def change
    drop_table :restaurantpics
  end
end
