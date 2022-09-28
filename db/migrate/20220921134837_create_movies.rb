class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :image
      t.string :summary
      t.boolean :watched, default: false
      t.timestamps
    end
  end
end
