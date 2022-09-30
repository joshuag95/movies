class UsersController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:create]

    def index 
        users = User.all
        render json: users
    end

    def show
        if current_user
            render json: current_user
        else
            render json: "no current session stored", status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
          if user.valid?
            session[:user_id] = user.id # this is the piece that logs a user in and keeps track of users info in subsequent requests.
            render json: user, status: :ok
          else
            render json: user.errors.full_messages, status: :unprocessable_entity
          end
      end

      def update
        user = User.find_by(id: params[:id])
            if user
              user.update(update_params)
              render json: user
            end
        end

      def destroy
        user = User.find_by(id: params[:id])
        user.destroy
        head :no_content
      end

      def user_movies
        user = current_user
        user_flicks = user.movies
        render json: user_flicks
      end

      private

    def user_params
        params.permit(:name, :username, :email, :password, :id)
    end

    def update_params
      params.permit(:name, :username, :email, :id)
    end

    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end

