# ChefsTable


[Heroku link][heroku] coming soon...

[heroku]: https://chefstable.herokuapp.com/

## Minimum Viable Product

ChefsTable is a web application inspired by AirBNB that will be build using Ruby on Rails and React.js. Its purpose will be to make restaurant reservations for users, and then allow users who have attended a restaurant to review it. It will integrate a map & search bar for finding restaurants, and a scrollable list of restaurants.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Restaurant Map
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Reservations for Restaurants
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Reviews for Restaurants
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Search for Restaurants by area (likely city based)
    - [ ] Smooth, bug-free navigation
    - [ ] Adequate seed data to demonstrate the site's features
    - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1.5 day, W1 W EOD)

**Objective:** Functioning rails project with Authentication

- [x] create `User` model under API namespace
- [x] create user & session controllers under API namespace, patch ApplicationController
- [x] blank landing page after sign-in with a header reading "Chefs Table"
- [x] setup React Router
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] user signup/signin pages
- [x] Front-end Auth Implementation - follow BenchBNB Implementation.
    - [x] Bootstrap current user into app.html.erb
        - [x]  session show page! pulls current user via ajax in api/sessions_util
    - [x] make sign in/ log in/ sign up pages dynamically render
- [x] ensure permissions for any page but root! (there are no other pages yet though..lol)
- [x] DEPLOY TO HEROKUUUUUU

### Phase 2: Restaurants & Reservations (2 Days, W1 Fri EOD)

**Objective:** Build the restaurant & reservation back & front end structure

- [x] create restaurant DB structure, model, and controller
- [x] create reservation DB structure, model, and controller
- [x] QA functionality of Ms & Cs; test in console for all CRUD functions
- [x] seed the database with test data
- [x] Create Restaurant components
- [ ] setup the flux loop with skeleton files for everything but the components
- [ ] Implement basic dynamic rendering for all CRUD functions
  - [ ] `RestaurantIndex` (the map with a sidebar holding a text index)
  - [ ] `RestaurantIndexItem` (a restaurant, once clicked on, will show a detailed item pop-over style)
  - [ ] `ReservationForm` (nested within the restaurant index item, making a reservation will require an acct)
- [ ] test out API interaction in the console.

### Phase 2.5: Basic Styling Necessities(1 day, W1 Sun EOD)

**Objective:** Existing pages will look good.

- [ ] create a basic style guide
- [ ] add basic colors & styles
- [ ] Basic styling the basic pages created in Phase 2

### Phase 3: Reservations (1.5 days, W2 Tu NOON)

**Objective:** Reservations can be created, modified, and destroyed

- [ ] Integrate Google Maps API to hold markers where Restaurants are all over the world
  - [ ] Integrate with the necessary Flux components, mirroring benchbnb's approach to map integration
- [ ] Integrate map searchability for restaurants by area on map mirroring  benchbnb's approach
- [ ] Integrate searchability (in the search bar) by area, cuisine & restaurant name
- [ ] Style all the above features as they come online


### Phase 4: Reservations Part 2 (0.5 day, W2 Tu EOD)

**Objective:** Reservations belong to Users, and can be created, modified, and deleted.

- [ ] Ensure the logic is sound so that overbookings don't occur
  - [ ] also, don't forget to not let a user book two restaurants at the same time, mark user as busy (potential bonus, calender)  
- [ ] Ensure proper styling per style guides


### Phase 6: Reviews (1 days, W2 W EOD)

**Objective:** Restaurants can be reviewed, but only by a user that has booked with the restaurant recently through TableSetter
    - [ ] `ReviewForm`      (nested within the index item, reviewing will require you booked with the rest. through us!)
- [ ] Ensure permissions for reviews are set and functioning properly
  - [ ] A user should be able to create, delete, and modify reviews.
    - [ ] Limit the number of mods per given period?
- [ ] Ensure proper styling per style guide

### Phase 7: Bug Fixing, Styling & Styling Cleanup. Seed Production DB. QA (1.5 days, W2 Friday NOON)

**objective:** Enable complex styling on main page, restaurants page, reviews page

- [ ] Ensure fantastic styling on all pages.
  - [ ] Put sexy food/restaurant pictures everywhere (placeholder will exists before, this is for high-res hosted images)
- [ ] Make sure the layout is cohesive and there are no layout bugs or visual bugs
- [ ] Perform final QA on all functionality regarding Restaurants, Reviews, and Reservations

### PHASE 8: QA & Beer (0.5 Days, W2 F EOD)

**objective:** Chill out and make sure you don't have any visible bugs
- [ ] Drink a good beer whilst using your own site. Congratulations, you done it!

### Bonus Features (TBD)
- [ ] Create a User Homepage where a user can view his/her reservations, past visit in index AND map form, and rebook past reservations.
- [ ] Custom map interior to each Restaurant (can even say it is in beta and do for a couple restaurants only)
  - [ ] clicking on a table allows booking that table, etc.
  - [ ] http://map.reactd3.org/ will be my friend if I get here.
- [ ] User calender showing all restaurant reservations, with links to past reviews, and a book again functionality
- [ ] Restaurant registration (this is currently planned to be admin adding of restaurants only, due to vetting of quality)
- [ ] Multiple sessions

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
