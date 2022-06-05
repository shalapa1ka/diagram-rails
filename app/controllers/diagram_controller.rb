# frozen_string_literal: true

class DiagramController < ApplicationController
  def show
    @items = Item.all
    @item = Item.new
  end
end
