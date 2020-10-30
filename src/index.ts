// Gmaps API KEY -- AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU
import CustomMap from './CustomMap';
import User from './User';
import Company from './Company';

import './assets/stylesheets/main.scss';

const mapEl = document.getElementById('map');

const user = new User();
const company = new Company();
const map = new CustomMap(mapEl);

map.addMarker(user);
map.addMarker(company);
updateUserFields(user);
updateCompanyFields(company);

function updateUserFields(user: User): void {
    const name = document.getElementById('user-name');
    const locLat = document.getElementById('user-lat');
    const locLng = document.getElementById('user-lng');

    name.textContent = user.name;
    locLat.textContent = user.location.lat.toString();
    locLng.textContent = user.location.lng.toString();
}

function updateCompanyFields(company: Company): void {
    const name = document.getElementById('company-name');
    const motto = document.getElementById('company-motto');
    const locLat = document.getElementById('company-lat');
    const locLng = document.getElementById('company-lng');

    name.textContent = company.companyName;
    motto.textContent = company.catchPhrase;
    locLat.textContent = company.location.lat.toString();
    locLng.textContent = company.location.lng.toString();
}
