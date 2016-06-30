class Changedateformat < ActiveRecord::Migration
  def change
    remove_column :reservations, :datetime
    add_column :reservations, :date, :datetime
    add_column :reservations, :time, :string
  end
end
