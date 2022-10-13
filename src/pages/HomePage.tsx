import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import Template from 'layout/Template';
import Title from 'components/Title';

const classes = [
  {
    id: 'cisc-305',
    link: '/cisc305',
    header: 'CISC 305',
    description: 'Introduction to the Internet',
    meta: 'CRC - Fall 2022'
  },
  {
    id: 'cisw-308',
    link: '/cisw308',
    header: 'CISW 308',
    description: 'Mobile Web Development',
    meta: 'CRC - Fall 2022'
  },
  {
    id: 'cisw-400',
    link: '/cisw400',
    header: 'CISW 400',
    description: 'Client Web Scripting',
    meta: 'CRC - Fall 2022'
  }
];

const HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <Title>Homepage</Title>
      </Helmet>
      <Template>
        <Title>CLASSES</Title>
        <Card.Group fluid centered>
          {classes.map((collegeClass) => {
            return (
              <Card key={collegeClass.id} as={Link} to={collegeClass.link}>
                <Card.Content>
                  <Card.Header>{collegeClass.header}</Card.Header>
                  <Card.Meta>{collegeClass.meta}</Card.Meta>
                  <Card.Description>{collegeClass.description}</Card.Description>
                  <Card.Content extra align='right'>
                    {collegeClass.id === 'cisw-308' ? (
                      <Icon name='mobile' color='green' />
                    ) : collegeClass.id === 'cisw-400' ? (
                      <Icon name='js' color='yellow' />
                    ) : collegeClass.id === 'cisc-305' ? (
                      <Icon name='internet explorer' color='blue' />
                    ) : null}
                  </Card.Content>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </Template>
    </>
  );
};

export default HomePage;
