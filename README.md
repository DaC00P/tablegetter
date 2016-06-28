# TableSetter

[Heroku link][heroku] coming soon...

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

TableSetter is a web application inspired by AirBNB that will be build using Ruby on Rails and React.js. Its purpose will be to make restaurant reservations for users, and then allow users who have attended a restaurant to review it. It will integrate a map & search bar for finding restaurants, and a scrollable list of restaurants.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

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
- [ ] Search for Restaurants by area (likely city based) and Cuisine
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

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] create restaurant model & controller
- [ ] blank landing page after sign-in with a header

### Phase 2: Back End Models & Controllers Pt 2 (2 days, W1 Th EOD)

**Objective:** Build the reservation, review back-end structure


- [ ] create reservation model & controller
- [ ] create review model &  controller
- [ ] QA functionality of Ms & Cs; test in console for all CRUD functions
- [ ] Build out basic associations (restaurant has many Reservations & reviews)
- [ ] seed the database with test data
- [ ] jBuilder views for reviews & reservations
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 2.5: Basic Styling Necessities(0.5 days, W1 F NOON)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 3: Flux Architecture and Router (2.5 days, W2 T EOD)

**Objective:** Reservations can be created, modified, and destroyed

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- [ ] Integrate Google Maps API to hold markers where Restaurants are all over the city
  - [ ] Create  the necessary Flux components, mirroring benchbnb's approach to map integration
- implement each component, building out the flux loop as needed.
  - [ ] `RestaurantIndex` (the map with a sidebar holding a text index)
  - [ ] `RestaurantIndexItem` (a restaurant, once clicked on, will show a detailed item pop-over style)
    - [ ] `ReservationForm` (nested within the index item, making a reservation will not require an acct)
    - [ ] `ReviewForm`      (nested within the index item, reviewing will require you booked with the rest. through us!)
- [ ] Integrate searchability for restaurants by area and perhaps by cuisine
- [ ] Style all the above features as they come online


### Phase 4: Reservations (0.5 day, W2 Thu 12pm)

**Objective:** Reservations belong to Users, and can be created, modified, and deleted.

- [ ] Enact permissions so that guest users can still book Reservations
- [ ] Ensure the logic is sound so that overbookings don't occur
  - [ ] also, don't forget to not let a user book two restaurants at the same time, mark user as busy (potential bonus, calender)  
- [ ] Ensure proper styling per style guides


### Phase 6: Reviews (0.5 days, W2 Th 12pm)

**Objective:** Restaurants can be reviewed, but only by a user that has booked with the restaurant recently through TableSetter

- [ ] Ensure permissions for reviews are set and functioning properly
  - [ ] A user should be able to create, delete, and modify reviews.
    - [ ] Limit the number of mods per given period?
- [ ] Ensure proper styling per style guide
- [ ] Potential Bonus: super-users who get gold star for many reviews

### Phase 7: Bug Fixing, QA, Styling & Styling Cleanup. Seed Production DB (1.5 days, W2 Friday EOD)

**objective:** Enable complex styling of notes.

- [ ] Put sexy food/restaurant pictures everywhere (placeholder will exists before, this is for high-res hosted images)
- [ ] Make sure the layout is cohesive and there are no layout bugs or visual bugs
- [ ] Perform final QA on all functionality regarding Restaurants, Reviews, and Reservations

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
