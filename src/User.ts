import faker from 'faker';
import { Mappable } from './CustomMap';

class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.findName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return `
            <div class="label">
                <h1>User</h1>
                <p>Name: ${this.name}</p>
            </div>
        `;
    }
}

export default User;
