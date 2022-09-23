class User < ApplicationRecord
    has_secure_password

    has_many :received_follows, foreign_key: :followed_user_id, class_name: "Follow"

    # Will return an array of users who follow the user instance
    has_many :followers, through: :received_follows, source: :follower

    has_many :given_follows, foreign_key: :follower_id, class_name: "Follow"
  
    # returns an array of other users who the user has followed
    has_many :followings, through: :given_follows, source: :followed_user

    has_many :saved_movies
    has_many :movies, through: :saved_movies

    validates :name, presence: true
    # validates :email, uniqueness: true
    validates :username, presence: true  
    validates :password, presence: true 
end
