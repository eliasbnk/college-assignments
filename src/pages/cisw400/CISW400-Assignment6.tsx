import React, { useState } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';
import { Card, Dropdown, Header, Image } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import {
  auImage1,
  auImage2,
  auImage3,
  auImage4,
  auImage5,
  auImage6,
  chImage1,
  chImage2,
  chImage3,
  chImage4,
  chImage5,
  chImage6,
  grImage1,
  grImage2,
  grImage3,
  grImage4,
  grImage5,
  grImage6,
  krImage1,
  krImage2,
  krImage3,
  krImage4,
  krImage5,
  krImage6,
  seImage1,
  seImage2,
  seImage3,
  seImage4,
  seImage5,
  seImage6
} from 'assets';

const assignment = [
  {
    completed: true,
    name: 'a drop-down menu with 3 or more destination options.'
  },
  {
    completed: true,
    name: 'a set of corresponding thumbnail images for each dropdown option.'
  },
  {
    completed: true,
    name: 'roll over effect - when the user hovers a thumbnail image a larger version of the image is displayed.'
  }
];

const destinationOptions = [
  { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
  { key: 'gr', value: 'gr', flag: 'gr', text: 'Greece' },
  { key: 'kr', value: 'kr', flag: 'kr', text: 'South Korea' },
  { key: 'se', value: 'se', flag: 'se', text: 'Sweden' },
  { key: 'ch', value: 'ch', flag: 'ch', text: 'Switzerland' }
];

const auImages = [
  {
    id: uuidv4(),
    src: auImage1,
    place: 'Black Spur Drive'
  },
  {
    id: uuidv4(),
    src: auImage2,
    place: 'Cape Le Grand National Park'
  },
  {
    id: uuidv4(),
    src: auImage3,
    place: 'Flinders Ranges'
  },
  {
    id: uuidv4(),
    src: auImage4,
    place: 'Ningaloo Reef'
  },
  {
    id: uuidv4(),
    src: auImage5,
    place: 'Uluru Ayers Rock'
  },
  {
    id: uuidv4(),
    src: auImage6,
    place: 'The Twelve Apostles'
  }
];

const grImages = [
  {
    id: uuidv4(),
    src: grImage1,
    place: 'Port of Tinos'
  },
  {
    id: uuidv4(),
    src: grImage2,
    place: 'The Monastery of Roussanou'
  },
  {
    id: uuidv4(),
    src: grImage3,
    place: 'Santorini'
  },
  {
    id: uuidv4(),
    src: grImage4,
    place: 'Athens'
  },
  {
    id: uuidv4(),
    src: grImage5,
    place: 'Santorini'
  },
  {
    id: uuidv4(),
    src: grImage6,
    place: 'Navagio Bay'
  }
];

const seImages = [
  {
    id: uuidv4(),
    src: seImage1,
    place: "The King's Trail"
  },
  {
    id: uuidv4(),
    src: seImage2,
    place: 'Gamla Stan'
  },
  {
    id: uuidv4(),
    src: seImage3,
    place: 'Ales Stenar'
  },
  {
    id: uuidv4(),
    src: seImage4,
    place: 'Lake Siljan'
  },
  {
    id: uuidv4(),
    src: seImage5,
    place: 'Gamla Hamn Naturreservat'
  },
  {
    id: uuidv4(),
    src: seImage6,
    place: 'Visby'
  }
];

const chImages = [
  {
    id: uuidv4(),
    src: chImage1,
    place: 'Somewhere in Switzerland'
  },
  {
    id: uuidv4(),
    src: chImage2,
    place: 'Swiss Alps'
  },
  {
    id: uuidv4(),
    src: chImage3,
    place: 'Lake Zurich'
  },
  {
    id: uuidv4(),
    src: chImage4,
    place: 'Saxon Switzerland Mountains'
  },
  {
    id: uuidv4(),
    src: chImage5,
    place: 'Matterhorn'
  },
  {
    id: uuidv4(),
    src: chImage6,
    place: 'Saxon Switzerland Mountains'
  }
];

const krImages = [
  {
    id: uuidv4(),
    src: krImage1,
    place: 'Bukchon Hanok Village'
  },
  {
    id: uuidv4(),
    src: krImage2,
    place: 'Cheonjiyeon Waterfall'
  },
  {
    id: uuidv4(),
    src: krImage3,
    place: 'Metasequoia-lined Road'
  },
  {
    id: uuidv4(),
    src: krImage4,
    place: 'Jirisan National Park'
  },
  {
    id: uuidv4(),
    src: krImage5,
    place: 'Juwangsan National Park'
  },
  {
    id: uuidv4(),
    src: krImage6,
    place: 'Nagan Eupseong Folk Village'
  }
];

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
        <Assignment assignment={assignment} />
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
            options={destinationOptions}
            onChange={(_, { value }) => setDestination(value)}
          />
          <Card.Group itemsPerRow={6} style={{ maxWidth: '570px', marginTop: '5px' }}>
            {destination === 'au' ? (
              auImages.map((image) => {
                return (
                  <Card
                    key={image.id}
                    image={image.src}
                    onMouseOver={() => setBigIMG({ place: image.place, src: image.src })}
                    onMouseOut={() =>
                      setBigIMG({
                        src: '',
                        place: ''
                      })
                    }
                  />
                );
              })
            ) : destination === 'se' ? (
              seImages.map((image) => {
                return (
                  <Card
                    key={image.id}
                    image={image.src}
                    onMouseOver={() => setBigIMG({ place: image.place, src: image.src })}
                    onMouseOut={() =>
                      setBigIMG({
                        src: '',
                        place: ''
                      })
                    }
                  />
                );
              })
            ) : destination === 'kr' ? (
              krImages.map((image) => {
                return (
                  <Card
                    key={image.id}
                    image={image.src}
                    onMouseOver={() => setBigIMG({ place: image.place, src: image.src })}
                    onMouseOut={() =>
                      setBigIMG({
                        src: '',
                        place: ''
                      })
                    }
                  />
                );
              })
            ) : destination === 'ch' ? (
              chImages.map((image) => {
                return (
                  <Card
                    key={image.id}
                    image={image.src}
                    onMouseOver={() => setBigIMG({ place: image.place, src: image.src })}
                    onMouseOut={() =>
                      setBigIMG({
                        src: '',
                        place: ''
                      })
                    }
                  />
                );
              })
            ) : destination === 'gr' ? (
              grImages.map((image) => {
                return (
                  <Card
                    key={image.id}
                    image={image.src}
                    onMouseOver={() => setBigIMG({ place: image.place, src: image.src })}
                    onMouseOut={() =>
                      setBigIMG({
                        src: '',
                        place: ''
                      })
                    }
                  />
                );
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
