class Api::ReservationsController < ApplicationController
  before_action :require_logged_in, only: [:create, :edit, :update, :destroy]


  def create
    Reservation.create!(reservation_params)

  end

  def index
    @reservation = Reservation.all
  end

  def update(id)
    @reservation = Reservation.find_by(id: id)
    @reservation.update_attributes(reservation_params)
    render json: @reservation
  end

  def destroy(id)
    @reservation = Reservation.find_by(id: id)

    if (@reservation.destroy)
      render json: "farts"
    else
      @errors = @reservation.errors.full_messages
      render json: @errors
    end
  end

  protected


    def reservation_doesnt_overlap(reservation_id)
      other_reservation_dates = Reservation.all.map {|reservation| reservation.date}

    end

  def reservation_params
    params.permit(:reservation).require(:date, :time, :party_size, :allergies, :special_instructions, :restaurant_id)
  end
end
