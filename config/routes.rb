Rails.application.routes.draw do
  devise_for :users
  root "boxs#box", as: :home
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do

    post '/sign_in', to: 'sign_in#sign_in', as: :sign_in
    post '/sign_up', to: 'sign_up#sign_up', as: :sign_up

  end
end
