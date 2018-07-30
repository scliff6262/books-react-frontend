class AddBuyLinkToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :buy_link, :string
  end
end
