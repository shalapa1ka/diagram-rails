# frozen_string_literal: true

Rails.application.routes.draw do
  resources :items

  get 'diagram/show'
  post 'diagram/show'
  root 'diagram#show'
end
