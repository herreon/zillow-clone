import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';


const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});


 // set the map to show SF
const mapOptions = {
    center: { lat: 37.7758, lng: -122.435 }, // this is SF
    zoom: 13
};

class PropertyMap extends React.Component { 

    componentDidMount() {
       
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.properties);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.properties);
    }


    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateBounds(bounds);
        });
        // google.maps.event.addListener(this.map, 'click', (event) => {
        //     const coords = getCoordsObj(event.latLng);
        //     this.handleClick(coords);
        // });
    }
            
    render() {
        return(
            <div id='map-container' ref={map => this.mapNode = map} >
                Map
            </div>
        )
    }
}

export default withRouter(PropertyMap);