# frozen_string_literal: true

class DiagramController < ApplicationController
  def show
    @items = Item.all
  end

  def create
    @item = Item.build(item_params)
    redirect_to root_path if @item.save
  end
end
