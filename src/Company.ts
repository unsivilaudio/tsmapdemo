import faker from 'faker';
import { Mappable } from './CustomMap';

class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerContent() {
        return `
            <div class="label">
                <h1>Company</h1>
                <p>Name: ${this.companyName}</p>
                <p>Motto: ${this.catchPhrase}</p>
            </div>
        `;
    }
}

export default Company;
