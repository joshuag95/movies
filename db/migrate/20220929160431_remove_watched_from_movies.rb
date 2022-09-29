class RemoveWatchedFromMovies < ActiveRecord::Migration[7.0]
  def change
    remove_column :movies, :watched, :boolean
  end
end
