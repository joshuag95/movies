class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :password, :email

  has_many :followers
  has_many :followings
  has_many :movies, through: :saved_movies
end
