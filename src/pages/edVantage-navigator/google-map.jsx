import React, { useCallback, useRef } from 'react';
import {
  GoogleMap,
  LoadScript,
  StandaloneSearchBox
} from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '361px',
  borderRadius: '16px'
};

const center = {
  lat: 34.052235,
  lng: -118.243683
};

const locations = [
  { id: 1, position: { lat: 34.052235, lng: -118.243683 } },
  { id: 2, position: { lat: 34.040713, lng: -118.246769 } },
  { id: 3, position: { lat: 34.056, lng: -118.257 } }
];

// Custom map styles for grayscale look
const mapStyles = [
  { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
  { featureType: 'water', stylers: [{ color: '#c9c9c9' }] }
  // Add additional styling here to get a similar look to the screenshot
];

const GoogleMapComponent = () => {
  const mapRef = useRef(null);
  const searchBoxRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;

    if (window.google && window.google.maps && window.google.maps.marker) {
      locations.forEach((location) => {
        new window.google.maps.marker.AdvancedMarkerElement({
          map: map,
          position: location.position,
          title: `Location ${location.id}`,
          icon: {
            url: 'https://path-to-your-custom-icon.png', // URL to a custom marker icon
            scaledSize: new window.google.maps.Size(32, 32)
          }
        });
      });

      map.setOptions({
        zoomControlOptions: {
          style: window.google.maps.ZoomControlStyle.SMALL,
          position: window.google.maps.ControlPosition.TOP_LEFT
        },
        styles: mapStyles
      });
    } else {
      console.error('Google Maps JavaScript API not loaded properly.');
    }
  }, []);

  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      mapRef.current.panTo(place.geometry.location);
    }
  };

  return (
    <LoadScript
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDDCuH-bD1fKC44XaDmAxi0yUzH_-1Gzb4&v=3.exp&libraries=geometry,drawing,places"
      libraries={['places']}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Search Box */}
        <StandaloneSearchBox
          onLoad={(ref) => (searchBoxRef.current = ref)}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Search for a location"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              marginTop: `10px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: 'absolute',
              top: '10px',
              left: '10px',
              zIndex: 5
            }}
          />
        </StandaloneSearchBox>

        {/* Heatmap toggle button */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 5
          }}
        >
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>View Heat Map</span>
            <input type="checkbox" />
          </label>
        </div>

        {/* Google Map */}
        <GoogleMap
          zoom={12}
          center={center}
          onLoad={onLoad}
          mapContainerStyle={mapContainerStyle}
          options={{
            styles: mapStyles,
            disableDefaultUI: true,
            zoomControl: true
          }}
        />
      </div>
    </LoadScript>
  );
};

export default GoogleMapComponent;
