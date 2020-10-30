// Gmaps API KEY -- AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU

import User from './User';
import Company from './Company';

import './assets/stylesheets/main.scss';

// const user = new User();
// const company = new Company();

// console.log(user);
// console.log(company);

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0,
    },
});
