Rails.application.routes.draw do
  resources :saved_movies, only: [:update, :destroy, :index, :show]
  resources :users, only: [:index, :show, :create, :destroy, :update]
  resources :follows, only: [:index, :create, :destroy]
  resources :movies, only: [:update, :index, :show]
  
  get 'sessions/create'
  get 'sessions/destroy'
  get '/signup', to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/me', to: "users#show"
  get '/media', to: "movies#from_api"
  post '/add_movie', to: "saved_movies#create"
  get 'user_movies', to: "users#user_movies"
  
end
