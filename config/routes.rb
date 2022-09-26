Rails.application.routes.draw do
  resources :saved_movies, only: [:create, :update, :destroy, :index, :show]
  resources :users, only: [:index, :show, :create, :destroy, :update]
  resources :follows, only: [:index, :create, :destroy]
  
  get 'sessions/create'
  get 'sessions/destroy'
  get '/signup', to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/me', to: "users#show"
  get '/media', to: "movies#from_api"
  # delete "users/:id", to: "users#destroy"
  
end
