const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');

const ReservationFinalizeForm = React.createClass({
  render() {
    return (
      <section className='reservation-finalize-form'>
        <div className='reservation-finalize-form'>
          <h3>Please Complete Your Reservation UserName</h3>
            Your Reservation Date: {this.props.date.toString()}
          <br/>
            Your Reservation Time: {this.props.time.value}
          <form>
            <input type="text" placeholder="Please Enter Your Party Size" className="reservation-entry-details"/>
            <br/>
            <input type="text" placeholder="Please Enter Any Allergies So We May Better Serve You" className="reservation-entry-details"/>
            <br/>
            <input type="text" placeholder="Please Enter Any Special Instructions So We May Better Serve You" className="reservation-entry-details"/>
            <br/>
            <input type="submit" value="Finalize Reservation"/>
          </form>
        </div>
      </section>
    )
  }
});

module.exports = ReservationFinalizeForm;
