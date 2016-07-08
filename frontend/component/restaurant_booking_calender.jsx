const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
import Calendar from 'react-input-calendar';
import Dropdown from 'react-dropdown';
const Modal = require('react-modal');
const ReservationFinalizeForm = require('./reservation_finalize_form');

const customStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : '0%',
    height                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : "#edefed",
    border                : '2.5px solid black',
    borderRadius          : '4px',
    color                 : 'black'
  }
};

const reserveDate = new Date();

const RestaurantBookingCalender = React.createClass({
  getInitialState() {
    return (
      {reservationDate: new Date(), reservationTime: "", modalIsOpen: false}
    );
  },

  handleCalenderSelect(date) {
    this.setState({reservationDate: date});
  },

  handleTimeSelect(time) {
    this.setState({reservationTime: time});
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

  render() {
    const options = ["5:00 PM", "7:00 PM", "9:00 PM"];
    const defaultOption = "Please Select a Seating";
    return (
      <section className='restaurant-booking-calender'>

            <Calendar onChange={this.handleCalenderSelect} closeOnSelect={true} type="calender" format='DD/MM/YYYY' date={this.state.reservationDate} defaultValue='Click Here to Reserve'/>
            <Dropdown onChange={this.handleTimeSelect} className="" options={options} value={this.state.reservationTime} placeholder={defaultOption} />
            <button className="btn btn-info btn-sm" id='reserve-finalize-button' onClick={this.openModal}>Finalize Reservation</button>

        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyle} id="reservation-modal">
          <ReservationFinalizeForm restaurant={this.props.restaurant} closeModal={this.closeModal} date={this.state.reservationDate} time={this.state.reservationTime}/>
        </Modal>
      </section>
    );
  }
});

module.exports = RestaurantBookingCalender;
