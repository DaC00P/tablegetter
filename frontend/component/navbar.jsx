"use strict";

const React = require('react');
const Link = require('react-router').Link;
const LoginForm = require('./login_form')

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
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
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
                  <button type="button" className="btn btn-info btn-sm" onClick={this.loginClick}>Log In</button>
                  <button type="button" className="btn btn-info btn-sm" onClick={this.signUpClick}>Sign Up</button>
            </ul>

          </div>
        </nav>

      </div>
    )
  }

});

module.exports = NavBar;

//the login/signup button should go on the right of the navbar!
