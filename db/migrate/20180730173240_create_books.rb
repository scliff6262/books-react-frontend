class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :img_link
      t.string :buy_link
      t.text :description
    end
  end
end
