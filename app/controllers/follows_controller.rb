class FollowsController < ApplicationController

    def create
        newFollow = Follow.create(followParams)
        render json: newFollow, status: :created
    end

private

    def followParams
        params.permit(:follower_id, :followed_user_id)
    end

end
