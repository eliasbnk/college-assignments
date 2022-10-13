/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';
import { Accordion } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Boudin, Chilis, InNout, PaneraBread, TacoBell } from 'assets';
import { v4 as uuidv4 } from 'uuid';

const CISW308Assignment4: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (e: any, titleProps: any) => {
    const { index } = titleProps;

    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  const assignment = [
    {
      completed: true,
      name: 'listing and linking  to your favorite-5 (or fewer) places to eat.'
    },
    {
      completed: true,
      name: 'listings contain information such as phone number (use telephone hyperlinks), address (link to a Google Map).'
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
        'https://www.google.com/maps/place/Boudin+SF/@38.5749736,-121.4019994,17z/data=!3m1!4b1!4m5!3m4!1s0x809ada557d7929af:0x4b8201a127d64751!8m2!3d38.5749736!4d-121.4019994'
    },
    {
      id: uuidv4(),
      src: InNout,
      name: 'In-N-Out',
      phoneNumber: '(800) 786-1000',
      phoneNumberLink: 'tel:+1-800-786-1000',
      address: '3501 Truxel Rd, Sacramento, CA 95834',
      addressLink: 'https://goo.gl/maps/5rtssiGZb2KyLQpKA'
    },
    {
      id: uuidv4(),
      src: Chilis,
      name: `Chili's`,
      phoneNumber: '(916) 285-8703',
      phoneNumberLink: 'tel:+1-916-285-8703',
      address: '3870 Truxel Rd, Sacramento, CA 95834',
      addressLink: 'https://goo.gl/maps/iFCDnk23ywRSH5HN7'
    },

    {
      id: uuidv4(),
      src: PaneraBread,
      name: 'Panera Bread',
      phoneNumber: '(916) 515-2012',
      phoneNumberLink: 'tel:+1-916-515-2012',
      address: '3571 N Freeway Blvd, Sacramento, CA 95834',
      addressLink: 'https://goo.gl/maps/erkno1X3d68db3BK9'
    },
    {
      id: uuidv4(),
      src: TacoBell,
      name: 'Taco Bell',
      phoneNumber: '(916) 649-1790',
      phoneNumberLink: 'tel:+1-916-649-1790',
      address: '3820 Northgate Blvd, Sacramento, CA 95834',
      addressLink: 'https://goo.gl/maps/2Xyd3uF1trWQydeH6'
    }
  ];

  return (
    <>
      <Helmet>
        <title>CISW 308 - Assignment 4</title>
      </Helmet>
      <Template>
        <Assignment assignment={assignment} />
        <Submissions>
          <Accordion fluid styled style={{ maxWidth: '600px' }}>
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

export default CISW308Assignment4;
