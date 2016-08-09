const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const ReservationActions = require('../actions/reservation_actions');


const ReservationFinalizeForm = React.createClass({
  getInitialState() {
    return ({
      date: this.props.date.toString(),
      time: this.props.time.value,
      party_size: 0,
      allergies: "",
      special_instructions: "",
      restaurant_id: this.props.restaurant.id,
      finalize: false,
      errors: ""
    });
  },

  componentDidMount() {
    ErrorStore.addListener(this.handleErrors);
  },

  handleErrors() {
    this.setState({errors: ErrorStore.formErrors("reservationErrors")});
  },

  handlePartySize(event) {
    event.preventDefault();
    this.setState({party_size: event.target.value});
  },

  handleAllergies(event) {
    event.preventDefault();
    this.setState({allergies: event.target.value});
  },

  handleInstructions(event) {
    event.preventDefault();
    this.setState({special_instructions: event.target.value});
  },

  copyState(state) {
    let copy = {};
    for (let attr in state) {
        copy[attr] = state[attr];
    }
    return copy;
  },

  handleReservationSubmit() {
    let reservationtoPass = this.copyState(this.state);
    delete reservationtoPass["finalize"];
    delete reservationtoPass["errors"];

    ReservationActions.postSingleReservation({reservation: reservationtoPass}, this.reservationConfirmed);
  },

  handleFinalizeClick() {
    this.handleReservationSubmit();
  },

  reservationConfirmed() {
    this.setState({finalize: true});
  },

  handleDemoLogin () {
		event.preventDefault();

    const demoFormData = {
      username: "demo",
      password: "123123"
    };
    SessionActions.logIn(demoFormData);
    this.props.closeModal();
	},

  handleLoginSignup() {
    console.log('loginsignup');
  },

  render() {

    const loginbutton = (
      <button
        type="button"
        className="btn btn-info btn-sm"
        id="reserve-finalize-button"
        onClick={this.handleLoginSignup}>
        Log In
      </button>
    );
    const signupbutton = (
      <button
        type="button"
        className="btn btn-info btn-sm"
        id="reserve-finalize-button"
        onClick={this.handleLoginSignup}>
        Sign Up
      </button>
    );

    const guestLogInButton = (
      <button
        type="button"
        className="btn btn-info btn-sm"
        id="reserve-finalize-button"
        onClick={this.handleDemoLogin}>
        Guest Login
      </button>
    );

    const confirmation = (
      <div id="5">
        <h3>Congratulations! You have completed your reservation for {this.props.restaurant.name}</h3>
          Your Reservation Date: {this.props.date.toString()}
        <br/>
          Your Reservation Time: {this.props.time.value}
      </div>
    );

    const reservationForm = (
      <div>
        <h3>Please Complete Your Reservation for {this.props.restaurant.name}</h3>
          <br></br> <span className="reservation-finalize-form-errors">{this.state.errors.error}</span> <br></br>
          <h4>Your Reservation Date: {this.props.date.toString()}</h4>
          <h4>Your Reservation Time: {this.props.time.value}</h4>
        <form>
          <input onChange={this.handlePartySize} type="text" placeholder="Please Enter Your Party Size" className="reservation-entry-details"/>
          <br/>
          <input onChange={this.handleAllergies} type="text" placeholder="Please Enter Any Allergies So We May Better Serve You" className="reservation-entry-details"/>
          <br/>
          <input onChange={this.handleInstructions} type="text" placeholder="Please Enter Any Special Instructions So We May Better Serve You" className="reservation-entry-details"/>
          <br/>
          <input onClick={this.handleFinalizeClick} className="btn btn-info btn-sm" type="submit" value="Finalize Reservation"/>
        </form>
      </div>
    );

    let currentForm = reservationForm;

    if (this.state.finalize) {
      currentForm = confirmation;
    }

    if (!SessionStore.isUserLoggedIn()) {
      currentForm = (
        <section>
          <h1 className="not-signed-in-reservation"> We Apologize <br>
          </br><br>
          </br>
          You must log in before booking a reservation. If you do not have an account, please sign up or use the Guest Log In
          <br></br>
        </h1>
        <div className='not-signed-in-buttons'>
          {loginbutton}{signupbutton}{guestLogInButton}
        </div>
        </section>
    );
    }


    return (
      <section className='reservation-finalize-form'>
        {currentForm}
      </section>
    );
  }
});

module.exports = ReservationFinalizeForm;
