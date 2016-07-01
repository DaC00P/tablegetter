"use strict";

const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const App = require('./component/App');
const LoginForm= require('./component/login_form');

const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');
const ErrorActions = require('./actions/error_actions');

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/login"  onEnter={ErrorActions.clearErrors} />
      <Route path="/signup" onEnter={ErrorActions.clearErrors} />
    </Route>
  </Router>
);
// Route path="benches/new" component = { BenchForm } onEnter={ _ensureLoggedIn } />
// use the above syntax to ensure login on interior routes


function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
