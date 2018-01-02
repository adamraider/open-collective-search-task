Rails.application.routes.draw do
  resources :collectives, only: :index
end
