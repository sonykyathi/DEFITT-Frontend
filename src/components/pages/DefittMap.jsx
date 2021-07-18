import React, { Component } from 'react';
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  GoogleMapReact,
} from 'google-maps-react';

export class DefittMap extends Component {
  render() {
    return (
      <Map google={this.props.google}>
        <Marker
          name={'Sahiwal Water Park'}
          position={{ lat: 30.66502, lng: 73.118766 }}
        />
      </Map>
    );
  }
}
// apiKey: 'AIzaSyAFqYcOAXvHbAkqX_bsSSqBTgWJeR1auYU',  {Abdul's testing Key.!}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBx3z5m5IkSTc648y-DMXqkHrJdNpzPqtQ',
})(DefittMap);

// AIzaSyBx3z5m5IkSTc648y-DMXqkHrJdNpzPqtQ
