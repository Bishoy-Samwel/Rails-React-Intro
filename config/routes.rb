Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
  namespace :api do
    namespace :v1 do
      resources :messages, only: %i[index create show update destroy]
      get 'randomMessage', to: 'messages#random_message'
    end
  end
end
