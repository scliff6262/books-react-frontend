class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :img_link, :categories, :description
end
