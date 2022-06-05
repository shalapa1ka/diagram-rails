class ItemsController < ApplicationController
  before_action :find_item, only: %i[edit update destroy]

  def create
    @items = Item.all
    @item = Item.create(item_params)
  end

  def edit; end

  def update
    redirect_to root_path if @item.update(item_params)
  end

  def destroy
    redirect_to root_path if @item.destroy
  end

  private

  def find_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :percent)
  end
end