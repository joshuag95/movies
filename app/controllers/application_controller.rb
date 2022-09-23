class ApplicationController < ActionController::API
    include ActionController::Cookies

    def current_user
        User.find_by(id: session[:user_id])
      end

      private
      def render_unprocessable_entity_response(invalid)
            render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
      end
  
      def render_404(invalid)
            render json: {errors: invalid.record.errors.full_messages}, status: 404
      end
  
  
  end