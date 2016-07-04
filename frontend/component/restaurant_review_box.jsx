const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');


const ReviewBox = React.createClass({
  render() {
    return (
      <section className='review-details'>
          <h2>SUP</h2>
          <p>a bunch of text here lololololololololol</p>
      </section>
    );
  }
});

module.exports = ReviewBox;
