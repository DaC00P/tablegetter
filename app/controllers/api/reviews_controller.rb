class Api::ReviewsController < ApplicationController

  before_action :require_logged_in, only: [:create, :edit, :update, :destroy]
  before_action :require_reservation_at, only: [:create, :edit, :update, :destroy]

  def new

  end

  def create

  end

  def index

  end

  def show

  end

  def edit

  end

  def update

  end

  def destroy

  end
end
