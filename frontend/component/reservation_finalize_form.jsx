const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const ReservationActions = require('../actions/reservation_actions');
const Moment = require('moment');
import Dropdown from 'react-dropdown';
import Calendar from 'react-input-calendar';
const Modal = require('react-modal');


const ReservationFinalizeForm = React.createClass({
  getInitialState() {
    return ({
      date: new Date(),
      time: '',
      party_size: 0,
      allergies: "",
      special_instructions: "",
      restaurant_id: this.props.restaurant.id,
      finalize: false,
      errors: ""
    });
  },


  handleCalenderSelect(date) {
    this.setState({date: date});
  },

  handleTimeSelect(time) {
    this.setState({time: time.value});
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
    //set party size to null so the back end validates on it existing
    if (reservationtoPass.party_size === 0){reservationtoPass.party_size = null;}
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

  handleLogin() {
    this.props.switchToLoginSignupForm('login');
  },

  handleSignup() {
    this.props.switchToLoginSignupForm('signup');
  },

  renderErrors() {
    let errors = this.state.errors.error;
    if(errors){
      return (
          <ul>
            {errors.map((error) => { return(<li>{error}</li>)})}
          </ul>
        );
    };
    return <div></div>;
  },

  render() {
    const options = ["5:00 PM", "7:00 PM", "9:00 PM"];
    const defaultOption = "Please Select a Time";

    const loginbutton = (
      <button
        type="button"
        className="btn btn-info btn-sm"
        id="reserve-finalize-button"
        onClick={this.handleLogin}>
        Log In
      </button>
    );
    const signupbutton = (
      <button
        type="button"
        className="btn btn-info btn-sm"
        id="reserve-finalize-button"
        onClick={this.handleSignup}>
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
      <div id="5" className="finalized-reservation">
        <h3 >
          Congratulations! You have completed your reservation for {this.props.restaurant.name}
        </h3>

        <section>
          Your Reservation Date: {Moment(this.state.date).format('dddd, MMMM Do YYYY')}
          <br/>
          Your Reservation Time: {this.state.time}
        </section>

        <button
          type="button"
          className="btn btn-info btn-sm"
          id="reserve-finalize-button"
          onClick={this.props.closeModal}>
          Close & Continue
        </button>
      </div>
    );

    const reservationForm = (
      <div>
        <form>
          <h3>Please Complete Your Reservation for {this.props.restaurant.name}</h3>
          <div className="form-group">
            <label for="inputPartySize">Party Size</label>
            <input onChange={this.handlePartySize} type="number" className="form-control" id="inputPartySize" aria-describedby="partySizeHelp" placeholder="Enter Party Size" />
            <small id="partySizeHelp" className="form-text text-muted">Please let us know how many we should set the table for!</small>
          </div>
          <div className="form-group">
            <label for="inputAllergies">Allergies?</label>
            <input onChange={this.handleAllergies} type="text" className="form-control" id="inputAllergies" aria-describedby="allergyHelp" placeholder="Enter any allergies" />
            <small id="allergyHelp" className="form-text text-muted">Please provide us with any allergy information, so we may customize your experience.</small>
          </div>
          <div className="form-group">
            <label for="inputSpecialInstructions">Special Instructions?</label>
            <input onChange={this.handleInstructions} type="text" className="form-control" id="inputSpecialInstructions" aria-describedby="specialInstructionsHelp" placeholder="Enter any special requests" />
            <small id="specialInstructionsHelp" className="form-text text-muted">Have any special requests? Let us know!</small>
          </div>
          <Calendar onChange={this.handleCalenderSelect} closeOnSelect={true}
            type="calender" minDate={new Date()}
            openOnInputFocus={true} format='MMMM Do YYYY'
            onKeyUp={this.handleTypingInDateField}
            parsingFormat='MM/DD/YYYY'  date={this.state.date}/>
          <div className="form-group">
            <Dropdown onChange={(time) => this.handleTimeSelect(time)} className="form-control"
              options={options} value={this.state.time}
              placeholder={defaultOption} />
          </div>
          <button onClick={this.handleFinalizeClick} type="submit" id='errorHelp' className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
    let errorList = (
      <div className='reservation-errors'>
        {this.renderErrors()}
      </div>
    )

    let currentForm = (
                      <div>
                        {reservationForm}
                        {errorList}
                      </div>
                    );

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
