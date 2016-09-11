class Api::ReservationsController < ApplicationController
  before_action :require_logged_in, only: [:create, :edit, :update, :destroy]


  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user_id = current_user.id
    @reservation.date = format_date(@reservation.date)
    if @reservation.save
      render json: @reservation
    else
      ##FIXME use @reservation.errors to pass the actual error msg
      render(
        json: {error: "Bad Reservation Details, try again"},
        status: 422
      )
    end
  end

  def index
    @reservation = Reservation.all
    render json: @reservation
  end

  def update
    @reservation = Reservation.find(params[:id])
    @reservation.update_attributes(reservation_params)
    if @reservation.save
      render json: @reservation
    else
      ##FIXME use @reservation.errors to pass the actual error msg
      render(
        json: {error: "Bad Reservation Details, try again"},
        status: 422
      )
    end
  end

  def destroy
    @reservation = Reservation.find_by(id: params[:id])
    if @reservation == nil
      render(
        json: {error: "This reservation cannot be deleted please contact customer support"},
        status: 422
      )
    end
    if @reservation.destroy
      render json: @reservation
    else
      @errors = @reservation.errors.full_messages
      render json: @errors
    end
  end

  protected
  ##TODO remember why this is necessary and make it more clear
  def format_date(date)
    if date.length > 10
      date.to_date
    else
      DateTime.strptime(date, '%m-%d-%Y').to_date
    end
  end


  def reservation_doesnt_overlap(reservation_id)
    other_reservation_dates = Reservation.all.map {|reservation| reservation.date}
  end

  def reservation_params
    rparams = params.require(:reservation).permit(:date, :time, :party_size, :allergies, :special_instructions, :restaurant_id)
    rparams.date = format_date(rparams.date)
  end
end
