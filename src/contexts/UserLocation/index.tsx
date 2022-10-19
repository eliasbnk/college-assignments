/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, createContext, useContext } from 'react';
import type { FC, ReactNode } from 'react';

export const UserLocation = createContext<{
  getUserLocation: () => void;
  userCoords: {
    lat: number;
    lng: number;
  };
}>({
  getUserLocation: {} as any,
  userCoords: {} as any
});

export const UserLocationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [userCoords, setUserCoords] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 38.582137391641716,
    lng: -121.49342257254159
  });

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setUserCoords({ lat: coords.latitude, lng: coords.longitude }),
      ({ message }) => {
        alert(`${message}. Please try enabling Geolocation services.`);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  };
  const getUserLocation = () => {
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
        const permission = result.state;
        if (permission === 'granted' || permission === 'prompt') {
          getLocation();
        }
      });
    } else if (navigator.geolocation) {
      getLocation();
    } else {
      alert("Unfortunately geolocation services aren't supported by your browser");
    }
  };

  const context = {
    userCoords,
    getUserLocation
  };
  return <UserLocation.Provider value={context}>{children}</UserLocation.Provider>;
};

export const useUserLocation = () => {
  const context = useContext(UserLocation);
  return context;
};
