class FollowsController < ApplicationController
before_action :authorize
    def create
        user = current_user
        newFollow = Follow.create(followParams)
        render json: user.followings, status: :created
        
    end

private

    def followParams
        params.permit(:follower_id, :followed_user_id)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end
end
