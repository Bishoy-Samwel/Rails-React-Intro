Rails.application.routes.draw do
  root 'components#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      resources :messages, only: %i[index]
      get 'randomMessage', to: 'messages#random_message'
    end
  end
end
