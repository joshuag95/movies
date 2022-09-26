class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :password, :email

  has_many :followers
  has_many :followings
end
