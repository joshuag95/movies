class MoviesController < ApplicationController
    skip_before_action :authorize, only: [:from_api]

    def from_api
       resp = RestClient.get('https://api.tvmaze.com/shows')
       render json: resp.body
              
    end

   
end
