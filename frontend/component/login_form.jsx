"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      username: "",
      password: "",
			form: this.props.form
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
			this.props.closeModal();
    }
  },

	handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password
		};

    if (this.state.form === "login") {
      SessionActions.logIn(formData);
    } else {
      SessionActions.signUp(formData);
    }
	},


  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this.state.form);

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

	toggleFormState() {
			this.setState({form: this.getOppositeForm() });
	},

	getOppositeForm() {
		if (this.state.form === "signup"){
			return "login";
		}
		else {
			return "signup";
		}
	},

	handleDemoLogin () {
		event.preventDefault();

    const demoFormData = {
      username: "demo",
      password: "123123"
    };
    SessionActions.logIn(demoFormData);
	},

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {
    let navLink = <a onClick={this.toggleFormState}> {this.getOppositeForm()} instead </a>;

		return (
							<div className="login-form-container">
								<form onSubmit={this.handleSubmit} className="login-form-box">
									<span className='welcome-to'>Welcome to ChefsTable!</span>
									<br/>
									<br/>
									<span className='please-login-signup'>Please { this.state.form } or { navLink }</span>

									{ this.fieldErrors("base") }
									<div className="login-form">
										<br />
										<label className='unpw'> Username:&nbsp;
											{ this.fieldErrors("username") }
											<input type="text"
												value={this.state.username}
												onChange={this.update("username")}
												className="login-input" />
										</label>

										<br />
										<label className='unpw'> Password:&nbsp;
											{ this.fieldErrors("password") }
											<input type="password"
												value={this.state.password}
												onChange={this.update("password")}
												className="login-input" />
										</label>
										<br />
										<button type="button" className="btn btn-info btn-sm" onClick={this.handleSubmit}>Submit</button>
										<button type="button" className="btn btn-info btn-sm" onClick={this.handleDemoLogin}>Guest Log In</button>
									</div>
								</form>
							</div>
		);
	}
});

module.exports = LoginForm;
