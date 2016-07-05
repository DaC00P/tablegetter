"use strict";

const React = require('react');
const Link = require('react-router').Link;
const LoginForm = require('./login_form');
const SessionStore = require('../stores/session_store');
const ReservationStore = require('../stores/reservation_store');
const Modal = require('react-modal');

const customStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : '0%',
    height                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundImage       : "url('https://res.cloudinary.com/dldvsrho8/image/upload/c_scale,h_416/v1467246180/calmmodalbg_okxz6u.jpg')",
    border                : '2.5px solid black',
    borderRadius          : '4px',
    color                 : 'black',
    width                 : '50vw',
    fontWeight            : 'bold'
  }
};


const NavBar = React.createClass({
  getInitialState() {
    return {
      modalIsOpen: false,
    };
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
        <ul>
          <li key={reservationn.date}> Date: {reservationn.date} </li>
          <li key={reservationn.time}> Time: {reservationn.time} </li>
          <li key={reservationn.party_size}> Party Size: {reservationn.party_size} </li>
          <li key={reservationn.allergies}> Allergies: {reservationn.allergies} </li>
          <li key={reservationn.special_instructions}>Special Instructions: {reservationn.special_instructions} </li>
          <li key={reservationn.restaurant_id}> Restaurant ID: {reservationn.restaurant_id} </li>
      </ul>
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
          {reservations}
        </Modal>

      </div>
    );
  }

});

module.exports = NavBar;
