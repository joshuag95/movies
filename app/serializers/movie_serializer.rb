class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :year, :director, :have_watched, :summary, :review, :rating
  has_one :user
end
