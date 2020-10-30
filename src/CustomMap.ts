export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

class CustomMap {
    private googleMap: google.maps.Map;

    constructor(element: Element) {
        this.googleMap = new google.maps.Map(element, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
            disableDefaultUI: true,
            draggable: true,
        });
    }

    addMarker(item: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: item.location.lat,
                lng: item.location.lng,
            },
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: item.markerContent(),
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}

export default CustomMap;
