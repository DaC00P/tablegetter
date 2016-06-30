class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :chef, null: false
      t.string :cuisine, null: false
      t.text :description, null: false
      t.float :lat
      t.float :lng
      t.integer :capacity, null: false
      t.timestamps null: false
    end
  end
end
