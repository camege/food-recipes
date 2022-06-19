class Api::V1::RestaurantsController < ApplicationController
  def index
    restaurant = Restaurant.all.order(created_at: :desc)
    render json: restaurant
  end

  def create
    restaurant = Restaurant.create!(restaurant_params)
    if restaurant
      render json: restaurant
    else
      render json: restaurant.errors
    end
  end

  def show
    if restaurant
      render json: restaurant
    else
      render json: restaurant.errors
    end
  end

  def destroy
    restaurant&.destroy
    render json: { message: 'Restaurant deleted!' }
  end

  private

  def restaurant_params
    params.permit(:name, :image, :review, :address)
  end

  def restaurant
    @restaurant ||= Restaurant.find(params[:id])
  end
end
