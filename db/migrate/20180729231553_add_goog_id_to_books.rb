class AddGoogIdToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :google_id, :string
  end
end
