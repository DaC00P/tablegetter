"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const LoginForm = require('./login_form');
const NavBar = require('./navbar');
const Modal = require('react-modal');
const RestaurantDisplay = require('./restaurant_display');
const RestaurantMap = require('./restaurant_map');
const ReservationActions = require('../actions/reservation_actions');
const ReservationStore = require('../stores/reservation_store');
const SocialButtons = require('./social_links');


const customStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : '0%',
    height                : '300px',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : '2.5px solid black',
    borderRadius          : '4px',
    color                 : 'black',
    backgroundColor       : '#FD3DDD3'
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



const App = React.createClass({
  getInitialState: function() {
    return {
      modalIsOpen: false,
      reservations: ReservationStore.all()
    };
  },

  componentDidMount() {
    this.storeListener = SessionStore.addListener(this.forceUpdate.bind(this));
    this.reservationListener = ReservationStore.addListener(this.updateReservations);
  },

  componentWillUnmount() {
    this.storeListener.remove();
    this.reservationListener.remove();
  },

  updateReservations() {
    this.setState({reservations: ReservationStore.all()});
  },

  _handleLogOut(){
    SessionActions.logOut();
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

  setLogin() {
    this.setState({form: "login"});
  },

  setSignup() {
    this.setState({form: "signup"});
  },


  render() {

    let marketingBanner = (
      <header>
        <div className="chef-bg">
          <NavBar reservations={this.state.reservations} handleLogout = {this._handleLogOut} openModal={this.openModal} closeModal={this.closeModal} setLogin={this.setLogin} setSignup={this.setSignup}/>
          <section className="header-text">
            <h3 className="site-title-text">INDULGE YOURSELF</h3>
            <h4 className="site-marketing-text">Book tables at the best restaurants in the world and experience a culinary pioneer's deft touch</h4>
          </section>
        </div>
      </header>
    );

    if (this.props.location.pathname.includes('api/restaurant')){
      marketingBanner = (
        <header>
          <div>
            <NavBar reservations={this.state.reservations} handleLogout = {this._handleLogOut} openModal={this.openModal} closeModal={this.closeModal} setLogin={this.setLogin} setSignup={this.setSignup}/>
          </div>
        </header>
      );
    }

    let footerStyleID = this.props.location.pathname;
    if(footerStyleID === "/" || footerStyleID === "/"){
      footerStyleID = "homepage";
    } else {
      footerStyleID = "footer";
    }


    return (
        <div className='flexboxeverything'>

          {marketingBanner}

          <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyle} id="loginmodal">
            <LoginForm closeModal={this.closeModal} form={this.state.form} />
          </Modal>

          {this.props.children}

          <nav id={footerStyleID} className="navbar navbar-default navbar-fixed-bottom">
              <SocialButtons/>
          </nav>


      </div>

    );
  }
});

module.exports = App;
