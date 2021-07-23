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
      <Map
        google={this.props.google}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        className={'map'}
        zoom={15}
        initialCenter={{
          lat: 51.57947, lng: -0.56568
        }}
      >
        <Marker
          title={'DEFITT'}
          position={{ lat: 51.57947, lng: -0.56568 }} />
      </Map>
    );
  }
}
// apiKey: 'AIzaSyAFqYcOAXvHbAkqX_bsSSqBTgWJeR1auYU',  {Abdul's testing Key.!}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCw4ulDXd_VTfzA7N26fxMroilme01sDYg',
})(DefittMap);

// AIzaSyBx3z5m5IkSTc648y-DMXqkHrJdNpzPqtQ
