class CollectiveSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :slug, :website, :tags, :mission, :background_image
end
