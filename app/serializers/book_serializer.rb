class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :img_link, :buy_link, :prev_link, :has_read, :description
end
