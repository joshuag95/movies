class Movie < ApplicationRecord
  has_many :saved_movies
  has_many :users, through: :saved_movies
end
