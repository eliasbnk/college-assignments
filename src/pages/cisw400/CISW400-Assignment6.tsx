import React, { useState } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';
import { Card, Dropdown, Header, Image } from 'semantic-ui-react';
import {
  CISW400Assignment6AssignmentData,
  CISW400Assignment6DestinationOptions,
  CISW400Assignment6CHImages,
  CISW400Assignment6GRImages,
  CISW400Assignment6KRImages,
  CISW400Assignment6SEImages
} from 'contexts/data';
import { CISW400Assignment6AUImages } from '../../contexts/data/index';
import ThumbnailImage from 'components/ThumbnailImage';

const CISW400Assignment6: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [destination, setDestination] = useState<any>('');
  const [bigIMG, setBigIMG] = useState({
    src: '',
    place: ''
  });

  return (
    <>
      <Helmet>
        <title>CISW 400 - Assignment 6</title>
      </Helmet>
      <Template>
        <Assignment assignment={CISW400Assignment6AssignmentData} />
        <Submissions>
          <Header as='h2' style={{ textAlign: 'left', marginTop: '0px' }}>
            Where would you like to travel to?
          </Header>
          <Dropdown
            value={destination}
            style={{ maxWidth: '550px' }}
            placeholder='Select Destination'
            clearable
            fluid
            search
            selection
            options={CISW400Assignment6DestinationOptions}
            onChange={(_, { value }) => setDestination(value)}
          />
          <Card.Group role='group' itemsPerRow={6} style={{ maxWidth: '570px', marginTop: '5px' }}>
            {destination === 'au' ? (
              CISW400Assignment6AUImages.map((image) => {
                return <ThumbnailImage key={image.id} image={image} setBigIMG={setBigIMG} />;
              })
            ) : destination === 'se' ? (
              CISW400Assignment6SEImages.map((image) => {
                return <ThumbnailImage key={image.id} image={image} setBigIMG={setBigIMG} />;
              })
            ) : destination === 'kr' ? (
              CISW400Assignment6KRImages.map((image) => {
                return <ThumbnailImage key={image.id} image={image} setBigIMG={setBigIMG} />;
              })
            ) : destination === 'ch' ? (
              CISW400Assignment6CHImages.map((image) => {
                return <ThumbnailImage key={image.id} image={image} setBigIMG={setBigIMG} />;
              })
            ) : destination === 'gr' ? (
              CISW400Assignment6GRImages.map((image) => {
                return <ThumbnailImage key={image.id} image={image} setBigIMG={setBigIMG} />;
              })
            ) : (
              <div></div>
            )}
          </Card.Group>
          {bigIMG.src !== '' ? (
            <div>
              <Header style={{ maxWidth: '325px', marginTop: '15px' }} as='h3'>
                {bigIMG.place}
              </Header>
              <Image style={{ maxWidth: '270px' }} src={bigIMG.src} />
            </div>
          ) : (
            <></>
          )}
        </Submissions>
      </Template>
    </>
  );
};

export default CISW400Assignment6;
