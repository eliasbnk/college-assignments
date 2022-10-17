import React from 'react';
import type { FC } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer: FC<{
  placeCoords: {
    lat: number;
    lng: number;
  };
}> = ({ placeCoords }) => {
  if (!process.env.REACT_APP_NOT_SECRET_CODE) {
    throw new Error('GOOGLE API KEY NOT FOUND!');
  }
  const mapStyles = {
    height: '500px',
    width: '100%'
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_NOT_SECRET_CODE}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={18} center={placeCoords}>
          <Marker position={placeCoords} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default MapContainer;
