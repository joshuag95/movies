class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :summary, :image
  end
