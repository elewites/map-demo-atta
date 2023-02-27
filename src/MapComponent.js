import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

import './index.css';

export default function MapComponent() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;

}

function Map() {
  const center = useMemo(() => ({ lat: 49.282730, lng: -123.120735 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}