class SavedMoviesController < ApplicationController


    def create
        user = current_user
        movie = Movie.find_or_create_by(movie_params)
        savedMovie = SavedMovie.find_or_create_by(user_id: user.id, movie_id: movie.id)
        user_movies = user.movies
        render json: user_movies
    end


    private

    def movie_params
        params.permit(:title, :summary, :image)
    end
    

    end
