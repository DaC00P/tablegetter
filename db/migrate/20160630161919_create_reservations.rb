class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.string :datetime, null: false
      t.text :description
      t.timestamps null: false
    end
  end
end
