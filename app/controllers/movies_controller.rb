class MoviesController < ApplicationController


    def from_api
       resp = RestClient.get('https://api.tvmaze.com/shows')
       render json: resp.body
              
    end
end
