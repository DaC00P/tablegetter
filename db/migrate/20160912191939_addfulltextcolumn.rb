class Addfulltextcolumn < ActiveRecord::Migration
    def change
      add_column :restaurants, :full_search_text, :text
    end
end
