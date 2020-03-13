/* global google:false */

class MarkerManager {

    constructor(map) {
        this.map = map;
        this.markers = {};
        // this.handleClick = handleClick;
    }

    updateMarkers(properties) {
        const propertiesObj = {};
        properties.forEach(property => propertiesObj[property.id] = property);

        properties
            .filter(property => !this.markers[property.id])
            .forEach(newProperty => this.createMarkerFromProperty(newProperty, this.handleClick))

        // Object.keys(this.markers)
        //     .filter(benchId => !benchesObj[benchId])
        //     .forEach((benchId) => this.removeMarker(this.markers[benchId]))
    }

    createMarkerFromProperty(property) {
        const position = new google.maps.LatLng(property.latitude, property.longitude);
        const marker = new google.maps.Marker({
            position: position,
            // map: this.map,
            propertyId: property.id
        });

        marker.setMap(this.map);

        // marker.addListener('click', () => this.handleClick(property));
        // this.markers[marker.propertyId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.propertyId].setMap(null);
        delete this.markers[marker.propertyId];
    }
}

export default MarkerManager;

