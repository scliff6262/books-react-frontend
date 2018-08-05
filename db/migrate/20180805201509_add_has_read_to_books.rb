class AddHasReadToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :has_read, :boolean
  end
end
