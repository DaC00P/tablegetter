class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.integer :frequency
      t.string :at
      t.string :job_name
      t.json :job_arguments

      t.timestamps null: false
    end
  end
end
