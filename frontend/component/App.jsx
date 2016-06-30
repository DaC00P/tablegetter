"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const LoginForm = require('./login_form');
const NavBar = require('./navbar');
const Modal = require('react-modal');
const RestaurantDisplay = require('./restaurant_display')



const customStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : '0%',
    height                : '300px',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundImage       : "url('https://res.cloudinary.com/dldvsrho8/image/upload/c_scale,h_416/v1467246180/calmmodalbg_okxz6u.jpg')",
    border                : '2.5px solid black',
    borderRadius          : '4px',
    color                 : 'black'
  }
};



const App = React.createClass({

  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(){
    SessionActions.logOut();
  },

  greeting() {
    if (SessionStore.isUserLoggedIn()) {

    	return (
    		<hgroup className="header-group">
    			<h2 className="header-name">Hi, {SessionStore.currentUser().username}!</h2>

    		</hgroup>
    	);
    } else if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
      return (
        <nav className="login-signup">
          <Link to="/login" activeClassName="current"></Link>
          <Link to="/signup" activeClassName="current"></Link>
        </nav>
      );
    }
  },

  getInitialState: function() {
    return {
      modalIsOpen: false
    };
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
    this.setState({form: "login"})
  },

  setSignup() {
    this.setState({form: "signup"})
  },



  render() {
    return (
      <div className='flexboxeverything'>
        <header>
          <NavBar handleLogout = {this._handleLogOut} openModal={this.openModal} closeModal={this.closeModal} setLogin={this.setLogin} setSignup={this.setSignup}/>
          <div className="chef-bg"></div>
      </header>



        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyle} id="loginmodal">
          <LoginForm closeModal={this.closeModal} form={this.state.form} />
        </Modal>

        { this.greeting() }

        <RestaurantDisplay/>

        {this.props.children}

      </div>
    );
  }
});

module.exports = App;
