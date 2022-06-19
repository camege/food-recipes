Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'restaurants/index'
      post 'restaurants/create'
      get 'show/:id', to: 'restaurants#show'
      delete '/destroy/:id', to: 'restaurants#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
