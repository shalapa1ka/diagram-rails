# frozen_string_literal: true

Rails.application.routes.draw do
  get 'diagram/show'
  root 'diagram#show'
end
