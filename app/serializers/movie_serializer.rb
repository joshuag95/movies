class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :watched, :summary, :image
  end
