"use strict";

const React = require('react');
const Link = require('react-router').Link;
const LoginForm = require('./login_form');
const SessionStore = require('../stores/session_store');
const ReservationStore = require('../stores/reservation_store');
const Modal = require('react-modal');
import Calendar from 'react-input-calendar';
import Dropdown from 'react-dropdown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const ReservationActions = require('../actions/reservation_actions');
const SessionActions = require('../actions/session_actions');
const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions');
const RestaurantStore = require('../stores/restaurant_store');
const RestaurantActions = require('../actions/restaurant_actions');
const ReservationEditForm = require('./reservation_edit_form');
const Moment = require('moment');
const ImageTransformer = require('../constants/image_transformer');

const SingleReservationForm = React.createClass({

  getInitialState() {
      return {reservation: this.props.reservation};
  },

  componentWillMount() {
    ReservationStore.addListener(this.accessCurrentUserSingleReservation);
    Tabs.setUseDefaultStyles(false);
  },

  accessCurrentUserSingleReservation() {
    let reservation = ReservationStore.find(this.props.reservation.id);
    this.setState({reservation: reservation});
  },

  generateReservationView() {

    let userReservation = [];
    userReservation.push(this.state.reservation);

    if (userReservation.length === 0) {
      return (
        <li>
          We are sorry, you do not have a reservation to view!
        </li>
      );
    }

    let restaurantName = "";
    return userReservation.map( (singleReservation) => {
          let restaurant = RestaurantStore.findByID(singleReservation.restaurant_id);
          restaurantName = restaurant.name;

          let restaurantPics = [];
          let pics = restaurant.restaurant_pics;

            for (let i = 0; i < pics.length; i++) {
              let url = ImageTransformer.showPagefoodPic(pics[i].picture_url, 350, 350);
              restaurantPics.push(<div key={pics[i].id}>
                                    <img key={pics[i].id*50}
                                        className="restaurant-detail-pic-reserve"
                                         src={url}
                                         style={{width: '200px', height: '200px'}}/>
                                  </div>);
            }


          // if (RestaurantStore.findByID(singleReservation.restaurant_id) !== undefined){
          //   restaurantName = RestaurantStore.findByID(singleReservation.restaurant_id).name;
          // }

          let allergies = singleReservation.allergies;
          if (allergies === null){
            allergies = "  N/A";
          }

          let specialInstructions = singleReservation.special_instructions;
          if (specialInstructions === null){
            specialInstructions = "  N/A";
          }

        return (
            <div
              key = {singleReservation.id * 12}
              className="user-reservation-ud">

              <h2 className="your-reservation-at">
                Your Reservation at {restaurantName}
              </h2>

              <p className='single-reservation-view'>
                  Your reservation is on&nbsp;{Moment(new Date(singleReservation.date)).format('dddd, MMMM Do YYYY')},
                  at&nbsp;{singleReservation.time}, for&nbsp;{singleReservation.party_size}&nbsp;people.
              </p>
              <p className='single-reservation-view'>
                  Allergy Notes:&nbsp;{allergies}
              </p>
              <p className='single-reservation-view'>
                  Specical Instructions:&nbsp;{specialInstructions}
              </p>
              <div className='restaurant-reserve-pics'>
                {restaurantPics[0]} {restaurantPics[1]} {restaurantPics[2]} {restaurantPics[3]}
              </div>
          </div>
        );
    });

  },


  render() {
    let reservationView = this.generateReservationView();

    return (
      <div>

      <Tabs id='tab-list-id'>
        <TabList id='view-edit-tab-selector'>
            <Tab>
              View
            </Tab>
            <Tab>
              Edit
            </Tab>
        </TabList>

        <TabPanel>
          {reservationView}
        </TabPanel>
        <TabPanel>
          <ReservationEditForm reservation={this.state.reservation}/>
        </TabPanel>
      </Tabs>


      </div>
    );
  }

});

module.exports = SingleReservationForm;
