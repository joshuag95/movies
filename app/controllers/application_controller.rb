class ApplicationController < ActionController::API
      include ActionController::Cookies
      before_action :authorize

      rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response



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

      def authorize
            return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end
      
end