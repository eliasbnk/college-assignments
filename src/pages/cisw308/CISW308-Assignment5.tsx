import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import ExtraCredit from 'components/ExtraCredit';
import Submissions from 'components/Submissions';
import { Accordion, Image } from 'semantic-ui-react';
import { Boudin, Chilis, InNout, PaneraBread, TacoBell } from 'assets';
import MapModal from 'components/MapModal';
import { v4 as uuidv4 } from 'uuid';

const assignment = [
  {
    completed: true,
    name: 'a clickable “SHOW MAP” buttons or links for 2 or more Locations that opens a “map page” for each of your food locations.'
  }
];

const extracredit = [
  {
    completed: true,
    name: `a clickable “GET DIRECTIONS” link or button on each map page, that links to another map with directions from the users' current location to the restaurant location.`
  }
];
const favoritePlaces = [
  {
    id: uuidv4(),
    src: Boudin,
    name: 'Boudin Bakery',
    phoneNumber: '(916) 973-1849',
    phoneNumberLink: 'tel:+1-916-973-1849',
    address: '2573 Fair Oaks Blvd, Sacramento, CA 95825',
    addressLink:
      'https://www.google.com/maps/place/Boudin+SF/@38.5749736,-121.4019994,17z/data=!3m1!4b1!4m5!3m4!1s0x809ada557d7929af:0x4b8201a127d64751!8m2!3d38.5749736!4d-121.4019994',
    placeCoords: { lat: 38.57498557564539, lng: -121.40199854938247 }
  },
  {
    id: uuidv4(),
    src: InNout,
    name: 'In-N-Out',
    phoneNumber: '(800) 786-1000',
    phoneNumberLink: 'tel:+1-800-786-1000',
    address: '3501 Truxel Rd, Sacramento, CA 95834',
    addressLink: 'https://goo.gl/maps/5rtssiGZb2KyLQpKA',
    placeCoords: { lat: 38.63682135923305, lng: -121.5041714687768 }
  },
  {
    id: uuidv4(),
    src: Chilis,
    name: `Chili's`,
    phoneNumber: '(916) 285-8703',
    phoneNumberLink: 'tel:+1-916-285-8703',
    address: '3870 Truxel Rd, Sacramento, CA 95834',
    addressLink: 'https://goo.gl/maps/iFCDnk23ywRSH5HN7',
    placeCoords: { lat: 38.6385674159852, lng: -121.50372754232959 }
  },

  {
    id: uuidv4(),
    src: PaneraBread,
    name: 'Panera Bread',
    phoneNumber: '(916) 515-2012',
    phoneNumberLink: 'tel:+1-916-515-2012',
    address: '3571 N Freeway Blvd, Sacramento, CA 95834',
    addressLink: 'https://goo.gl/maps/erkno1X3d68db3BK9',
    placeCoords: { lat: 38.6402061514062, lng: -121.50000428469711 }
  },
  {
    id: uuidv4(),
    src: TacoBell,
    name: 'Taco Bell',
    phoneNumber: '(916) 649-1790',
    phoneNumberLink: 'tel:+1-916-649-1790',
    address: '3820 Northgate Blvd, Sacramento, CA 95834',
    addressLink: 'https://goo.gl/maps/2Xyd3uF1trWQydeH6',
    placeCoords: { lat: 38.63686305635747, lng: -121.47572123063725 }
  }
];

const CISW308Assignment5: FC = () => {
  const [userCoords, setUserCoords] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 38.5816,
    lng: -121.4944
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
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
    getUserLocation();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any, titleProps: any) => {
    const { index } = titleProps;

    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <>
      <Helmet>
        <title>CISW 308 - Assignment 5</title>
      </Helmet>
      <Template>
        <Assignment assignment={assignment} />
        <ExtraCredit assignment={extracredit} />
        <Submissions>
          <Accordion fluid styled style={{ maxWidth: '550px' }}>
            {favoritePlaces.map((place, index) => {
              return (
                <div key={place.id}>
                  <Accordion.Title active={activeIndex === index} index={index} onClick={handleClick}>
                    <Image style={{ maxWidth: '30px' }} src={place.src} />
                    {place.name}
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === index}>
                    Phone Number: <a href={place.phoneNumberLink}>{place.phoneNumber}</a>
                    <br />
                    Address:{' '}
                    <a target='_blank' rel='noopener noreferrer' href={place.addressLink}>
                      {place.address}
                    </a>
                    <br />
                    <MapModal placeCoords={place.placeCoords} userCoords={userCoords} />
                  </Accordion.Content>
                </div>
              );
            })}
          </Accordion>
        </Submissions>
      </Template>
    </>
  );
};

export default CISW308Assignment5;
