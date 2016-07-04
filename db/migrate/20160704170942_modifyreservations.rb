class Modifyreservations < ActiveRecord::Migration
  def change
    remove_column :reservations, :description
    add_column :reservations, :party_size, :integer
    add_column :reservations, :allergies, :text
    add_column :reservations, :special_instructions, :text
  end
end
