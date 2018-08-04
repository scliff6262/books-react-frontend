class AddPrevLinkToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :prev_link, :string
  end
end
