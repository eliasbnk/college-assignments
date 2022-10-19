/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';
import { Accordion } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { CISW308Assignment4AssignmentData, CISW308Assignment4FavoritePlacesData } from 'contexts/data';

const CISW308Assignment4: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (e: any, titleProps: any) => {
    const { index } = titleProps;

    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };
  return (
    <>
      <Helmet>
        <title>CISW 308 - Assignment 4</title>
      </Helmet>
      <Template>
        <Assignment assignment={CISW308Assignment4AssignmentData} />
        <Submissions>
          <Accordion fluid styled style={{ maxWidth: '600px' }}>
            {CISW308Assignment4FavoritePlacesData.map((place, index) => {
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
