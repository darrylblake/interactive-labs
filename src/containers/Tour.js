/* global google */
import React, { Component } from 'react';

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
};

export default class Main extends Component {
  componentDidMount() {
    const location = new google.maps.LatLng(-36.90063, 174.742702);
    const panoramaOptions = {
      zoom: 2,
      position: location,
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      rotateControl: false,
      streetViewControl: false,
      overviewMapControl: false,
      disableDefaultUI: false,
      addressControl: false,
      addressControlOptions: {
        position: google.maps.ControlPosition.BOTTOM,
        hide: true,
      },
      mode: 'webgl',
    };
    this.panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
  }
  render() {
    return (
      <div id="pano" style={styles.container}>Tour......</div>
    );
  }
}

