Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]

    resources :restaurants
    resources :reservations
    resources :reviews
    resources :searches
  end

  root "static_pages#root"
end
