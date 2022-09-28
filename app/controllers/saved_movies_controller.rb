class SavedMoviesController < ApplicationController

    def create
        user = current_user
        
        movie = Movie.find_or_create_by(movie_params)
        byebug

        savedMovie = SavedMovie.create(user_id: user.id, movie_id: movie.id)
        byebug
    end


    private

    def movie_params
        params.permit(:title, :summary, :image)
    end

    end
