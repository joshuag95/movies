class AddWatchedToSavedMovies < ActiveRecord::Migration[7.0]
  def change
    add_column :saved_movies, :watched, :boolean, default: false
  end
end
