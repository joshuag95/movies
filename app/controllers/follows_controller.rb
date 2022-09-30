class FollowsController < ApplicationController
before_action :authorize
    def create
        user = current_user
        newFollow = Follow.find_or_create_by(followParams)
        render json: user, status: :created
        
    end

    # def my_following
    #     user = current_user
    #     render json: user.followings
    # end

    # def unfollow

    # end
private

    def followParams
        params.permit(:follower_id, :followed_user_id)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end
end
