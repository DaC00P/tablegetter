const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const ReservationActions = require('../actions/reservation_actions')

const ReservationFinalizeForm = React.createClass({
  getInitialState() {
    return ({
      date: this.props.date.toString(),
      time: this.props.time.value,
      party_size: 0,
      allergies: "",
      special_instructions: "",
      restaurant_id: this.props.restaurant.id
    })
  },

  handlePartySize(event) {
    event.preventDefault();
    this.setState({party_size: event.target.value})
  },

  handleAllergies(event) {
    event.preventDefault();
    this.setState({allergies: event.target.value})
  },

  handleInstructions(event) {
    event.preventDefault();
    this.setState({special_instructions: event.target.value})
  },

  handleReservationSubmit() {
    ReservationActions.postSingleReservation({reservation: this.state});
  },

  render() {
    return (
      <section className='reservation-finalize-form'>
        <div className='reservation-finalize-form'>
          <h3>Please Complete Your Reservation for {this.props.restaurant.name}</h3>
            Your Reservation Date: {this.props.date.toString()}
          <br/>
            Your Reservation Time: {this.props.time.value}
          <form>
            <input onChange={this.handlePartySize} type="text" placeholder="Please Enter Your Party Size" className="reservation-entry-details"/>
            <br/>
            <input onChange={this.handleAllergies} type="text" placeholder="Please Enter Any Allergies So We May Better Serve You" className="reservation-entry-details"/>
            <br/>
            <input onChange={this.handleInstructions} type="text" placeholder="Please Enter Any Special Instructions So We May Better Serve You" className="reservation-entry-details"/>
            <br/>
            <input onClick={this.handleReservationSubmit} type="submit" value="Finalize Reservation"/>
          </form>
        </div>
      </section>
    )
  }
});

module.exports = ReservationFinalizeForm;
