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
const RestaurantShowPage = require('./component/restaurant_show_page');
const RestaurantDisplaySection = require('./component/restaurant_display_section');


const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');
const ErrorActions = require('./actions/error_actions');

window.errorstore = require('./stores/error_store');



const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={RestaurantDisplaySection}/>
      <Route path="/login"  onEnter={ErrorActions.clearErrors} component={RestaurantDisplaySection}/>
      <Route path="/signup" onEnter={ErrorActions.clearErrors} component={RestaurantDisplaySection}/>
      <Route path="/api/restaurants/:id" onEnter={ErrorActions.clearErrors} component={RestaurantShowPage}/>
    </Route>
  </Router>
);
// Route path="benches/new" component = { BenchForm } onEnter={ _ensureLoggedIn } />
// use the above syntax to ensure login on interior routes
//so ask matt about paranthasis and stuff if you want an optional route.


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
