"use strict";

const React = require('react');
const Link = require('react-router').Link;
const LoginForm = require('./login_form');
const SessionStore = require('../stores/session_store');

const NavBar = React.createClass({
  loginClick() {
    this.props.openModal();
    this.props.setLogin();
  },

  signUpClick() {
    this.props.openModal();
    this.props.setSignup();
  },


  render() {
    const loginbuttons = (<button type="button" className="btn btn-info btn-sm" onClick={this.loginClick}>Log In</button>)
    const signupbutton = (<button type="button" className="btn btn-info btn-sm" onClick={this.signUpClick}>Sign Up</button>)

    const logoutbutton = (<button type="button" className="btn btn-info btn-sm" onClick={this.props.handleLogout}>Log Out</button>)

    let currentbutton;
    if (SessionStore.isUserLoggedIn()){
      currentbutton = logoutbutton;
    }
    else {
      currentbutton = <span> {loginbuttons} {signupbutton} </span>;
    }

    return (
      <div className="transparant-navbar">
        <nav className="navbar navbar-default navbar-fix">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed navbar-button-top" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>


              <Link to="/" className="navbar-brand">

                <span className="glyphicon glyphicon-cutlery"></span>
                  &nbsp;
                Chefs Table
              </Link>

            </div>

            <ul className="nav navbar-nav navbar-right">
                  <button type="button" className="btn btn-info btn-sm" id="help-button">Help</button> {currentbutton}
            </ul>

          </div>
        </nav>

      </div>
    )
  }

});

module.exports = NavBar;
