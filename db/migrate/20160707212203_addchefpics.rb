class Addchefpics < ActiveRecord::Migration
  def change
    add_column :restaurants, :chef_pic_url, :text
  end
end
