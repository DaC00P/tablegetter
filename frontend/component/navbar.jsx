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





const customStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : '0%',
    height                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : "floralwhite",
    border                : '2.5px solid black',
    borderRadius          : '4px',
    color                 : 'black',
    width                 : '50vw',
    fontWeight            : 'bold',
    textAlign             : 'center'
  }
};
const options = ["5:00 PM", "7:00 PM", "9:00 PM"];
const defaultOption = "Please Select a Seating";


const NavBar = React.createClass({
  getInitialState() {
    return {
      modalIsOpen: false,
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
    this.setState({reservationTime: time});
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

  componentWillMount(){
    const appElement = document.getElementById('content');
    Modal.setAppElement(appElement);
  },

  editReservationDetails() {
    console.log('test');
  },

  editPartySize(event) {
    this.setState({party_size: event});
  },

  editAllergies(event) {
    this.setState({allergies: event});
  },

  editSpecialInstructions(event) {
    this.setState({special_instructions: event});
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

    let reservations = [];
    for (let reservation in this.props.reservations){
      reservations.push(this.props.reservations[reservation]);
    }

    reservations = reservations.map( (reservationn) => {
      return (
        <div key = {reservationn.id * 12} className="user-reservation-ud">
          <h3>Your Reservation at {reservationn.restaurant_id}</h3>

          <ul key={reservationn.id} className='reservation-details-edit'>
            <br></br>
            <h4>If you would like to edit your Reservation, please fill out the form and press Edit Reservation</h4>
            <li key={reservationn.id * 9}>
               Date: {reservationn.date} <Calendar onChange={this.handleCalenderSelect} closeOnSelect={true} type="calender" format='DD/MM/YYYY' date={this.state.reservationDate} defaultValue='Click Here to Reserve'/>
            </li>
            <li key={reservationn.id * 8}>
               Time: {reservationn.time} <Dropdown onChange={this.handleTimeSelect} className="" options={options} value={this.state.reservationTime} placeholder="Please Select a Seating" />
            </li>
            <li key={reservationn.id * 7}>
               Party Size: <input onChange={this.editReservationDetails} type="text" placeholder="Please Enter Your New Party Size" className="reservation-entry-details"/>
            </li>
            <li key={reservationn.id * 6}>
               Allergies: <input onChange={this.editReservationDetails} type="text" placeholder="Please Enter Your New Allergies" className="reservation-entry-details"/>
            </li>
            <li key={reservationn.id * 5}>
              Special Instructions: <input onChange={this.editReservationDetails} type="text" placeholder="Please Enter You New Special Instructions" className="reservation-entry-details"/>
           </li>
            <button type="button" className="btn btn-info btn-sm" id="edit-button" onClick={this.editReservationDetails} >Edit Reservation</button>
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
          <ul>{reservations}</ul>
        </Modal>

      </div>
    );
  }

});

module.exports = NavBar;
