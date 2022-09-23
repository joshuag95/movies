Rails.application.routes.draw do
  resources :movie_lists
  resources :saved_movies
  resources :users
  resources :follows
  
  get 'sessions/create'
  get 'sessions/destroy'
  get '/signup', to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/me', to: "users#show"
  get '/media', to: "movies#from_api"
end
