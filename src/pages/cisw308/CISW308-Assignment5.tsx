import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import ExtraCredit from 'components/ExtraCredit';
import Submissions from 'components/Submissions';
import { Accordion, Image } from 'semantic-ui-react';
import MapModal from 'components/MapModal';
import {
  CISW308Assignment5AssignmentData,
  CISW308Assignment5ExtraCreditData,
  CISW308Assignment5FavoritePlacesData
} from 'contexts/data';
import { useUserLocation } from 'contexts/UserLocation';

const CISW308Assignment5: FC = () => {
  const { getUserLocation } = useUserLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

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
        <Assignment assignment={CISW308Assignment5AssignmentData} />
        <ExtraCredit assignment={CISW308Assignment5ExtraCreditData} />
        <Submissions>
          <Accordion fluid styled style={{ maxWidth: '550px' }}>
            {CISW308Assignment5FavoritePlacesData.map((place, index) => {
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
                    <MapModal placeCoords={place.placeCoords} />
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
