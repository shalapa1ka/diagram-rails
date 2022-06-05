class ItemsController < ApplicationController
  before_action :find_items
  before_action :find_item, only: %i[edit update destroy]

  def create
    @item = Item.create(item_params)
  end

  def edit; end

  def update
    @item.update(item_params)
  end

  def destroy
    @item.destroy
  end

  private

  def find_items
    @items = Item.all
  end

  def find_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :percent)
  end
end