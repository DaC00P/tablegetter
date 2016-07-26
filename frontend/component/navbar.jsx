"use strict";

const React = require('react');
const Link = require('react-router').Link;
const LoginForm = require('./login_form');
const SessionStore = require('../stores/session_store');
const ReservationStore = require('../stores/reservation_store');
const Modal = require('react-modal');
import Calendar from 'react-input-calendar';
import Dropdown from 'react-dropdown';
const ReservationActions = require('../actions/reservation_actions');
const SessionActions = require('../actions/session_actions');
const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');

const customStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : '0%',
    height                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#FD3DDD3',
    border                : '2.5px solid black',
    borderRadius          : '4px',
    color                 : 'black',
    width                 : '50vw',
    fontWeight            : 'bold',
    textAlign             : 'center'
  },
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : 1000
  }
};
const options = ["5:00 PM", "7:00 PM", "9:00 PM"];
const defaultOption = "Please Select a Seating";


const NavBar = React.createClass({
  getInitialState() {
    return {
      modalIsOpen: false,
      errors: "",
      reservationDate: new Date(),
      reservationTime: "",
      party_size: 0,
      allergies: "",
      special_instructions: ""
    };
  },

  handleCalenderSelect(date) {
    this.setState({reservationDate: date});
  },

  handleTimeSelect(time) {
    this.setState({reservationTime: time.value});
  },

  loginClick() {
    this.props.openModal();
    this.props.setLogin();
  },

  signUpClick() {
    this.props.openModal();
    this.props.setSignup();
  },

  reservationClick() {
    ErrorActions.clearErrors();
    this.openModal();
  },

  accessCurrentUserReservations() {
    const currentUserID = SessionStore.currentUser.id;
    const reservations = ReservationStore.all();
    for (let obj in reservations) {
      if (!(obj["user_id"] === currentUserID)){
        delete reservations[obj];
      }
    }
    return reservations;
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  handleErrors() {
    this.setState({errors: ErrorStore.formErrors("reservationErrors")});
  },

  componentWillMount(){
    const appElement = document.getElementById('content');
    Modal.setAppElement(appElement);
    ErrorStore.addListener(this.handleErrors);
    // RestaurantStore.addListener(this.forceUpdate.bind(this));
    ReservationActions.fetchAllReservations();
    RestaurantActions.fetchAllRestaurants();
  },

  editReservationDetails(id, event) {
    event.preventDefault();
    let reservationDetails = {
      id: id,
      date: this.state.reservationDate,
      time: this.state.reservationTime,
      party_size: this.state.party_size,
      allergies: this.state.allergies,
      special_instructions: this.state.special_instructions
    };
    ReservationActions.editReservationDetails(reservationDetails);
  },

  editPartySize(event) {
    this.setState({party_size: event.currentTarget.value});
  },

  editAllergies(event) {
    this.setState({allergies: event.currentTarget.value});
  },

  editSpecialInstructions(event) {
    this.setState({special_instructions: event.currentTarget.value});
  },

  cancelReservation(id) {
    ReservationActions.cancelReservation(id);
  },

  render() {
    const loginbuttons = (<button type="button" className="btn btn-info btn-sm" onClick={this.loginClick}>Log In</button>);
    const signupbutton = (<button type="button" className="btn btn-info btn-sm" onClick={this.signUpClick}>Sign Up</button>);

    const logoutbutton = (<button type="button" className="btn btn-info btn-sm" onClick={this.props.handleLogout}>Log Out</button>);

    let greeting = <div></div>;
    let myReservations = <div></div>;

    let currentbutton;
    if (SessionStore.isUserLoggedIn()){
      currentbutton = logoutbutton;
      greeting = (<h4 className="navbar-header-name">Welcome, {SessionStore.currentUser().username}!</h4>);

      myReservations = (<button type="button" className="btn btn-info btn-sm" id="help-button" data-toggle="modal" data-target="#reservation-modal" onClick={this.reservationClick} >My Reservations</button>);

    }
    else {
      currentbutton = <span> {loginbuttons} {signupbutton} </span>;
      greeting = <div></div>;
    }

    // if (!(this.props.location.pathname.includes('api/restaurant'))){
    //why isn't the pathname working??
    // }

    let reservations = [];
    for (let reservation in this.props.reservations){
      reservations.push(this.props.reservations[reservation]);
    }

    let restaurantt = "";
    reservations = reservations.map( (reservationn) => {


      if (RestaurantStore.findByID(reservationn.restaurant_id) !== undefined){
        restaurantt = RestaurantStore.findByID(reservationn.restaurant_id).name
      }


      return (
        <div key = {reservationn.id * 12} className="user-reservation-ud">
          <h2 className="your-reservation-at">Your Reservation at {restaurantt}</h2>

          <ul key={reservationn.id} className='reservation-details-edit'>
            <br></br>
            <h4>If you would like to edit your Reservation, please fill out the form and press Edit Reservation</h4>
            <br></br><span className="reservation-finalize-form-errors">{this.state.errors.error}</span><br></br>
            <li key={reservationn.id * 9}>
               Your Current Reservation Date is: {reservationn.date} <Calendar onChange={this.handleCalenderSelect} closeOnSelect={true} type="calender" format='DD/MM/YYYY' date={this.state.reservationDate} defaultValue='Click Here to Reserve'/>
            </li>
            <li key={reservationn.id * 8}>
               Your Current Reservation Time is: {reservationn.time} <Dropdown onChange={this.handleTimeSelect} className="" options={options} value={this.state.reservationTime} placeholder="Please Select a Seating" />
            </li>
            <li key={reservationn.id * 7}>
               <input onChange={this.editPartySize} type="text" placeholder="Please Enter Your New Party Size" className="reservation-entry-details"/>
            </li>
            <li key={reservationn.id * 6}>
               <input onChange={this.editAllergies} type="text" placeholder="Please Enter Your New Allergies" className="reservation-entry-details"/>
            </li>
            <li key={reservationn.id * 5}>
              <input onChange={this.editSpecialInstructions} type="text" placeholder="Please Enter You New Special Instructions" className="reservation-entry-details"/>
           </li>
            <button type="button" className="btn btn-info btn-sm" id="edit-button" onClick={this.editReservationDetails.bind(this, reservationn.id)} >Edit Reservation</button>
            <button type="button" className="btn btn-info btn-sm" id="cancel`-button" onClick={this.cancelReservation.bind(this, reservationn.id)} >Cancel Reservation</button>
          </ul>

        </div>

      );
    });

    if (reservations.length === 0){
      reservations = (<li></li>);
    }

    return (
      <div className="transparant-navbar">
        <nav className="navbar navbar-default navbar-fix">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">
                <span className="glyphicon glyphicon-cutlery"></span>
                  &nbsp;
                Chefs Table
              </Link>
            </div>
              <div className="nav navbar-nav navbar-right">
                    {myReservations}{currentbutton}
              </div>
          </div>
        </nav>

        <Modal key="reservationModal" isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyle} id="reservation-modal">
          <ul className="total-reservation-edit">{reservations}</ul>
        </Modal>

      </div>
    );
  }

});

module.exports = NavBar;
