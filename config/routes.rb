Rails.application.routes.draw do
  get '/' => 'pages#index'
  root :to => 'pages#index'
  resources :collectives, only: :index
end
