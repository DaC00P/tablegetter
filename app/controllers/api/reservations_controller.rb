class Api::ReservationsController < ApplicationController
  before_action :require_logged_in, only: [:create, :edit, :update, :destroy]


  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user_id = current_user.id
    @reservation.date = @reservation.date.to_date
    if @reservation.save
      render json: @reservation
    else
      render(
        json: {
          base: ["Bad Reservation Details, try again"]
        },
        status: 422
      )
    end
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
    params.require(:reservation).permit(:date, :time, :party_size, :allergies, :special_instructions, :restaurant_id)
  end
end
