import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import { Card, Icon, Label } from 'semantic-ui-react';
import type { SemanticICONS, SemanticCOLORS } from 'semantic-ui-react';
import Template from 'layout/Template';
import Title from 'components/Title';

const classes: {
  id: string;
  link: string;
  header: string;
  description: string;
  meta: string;
  complete: string;
  college: string;
  professorName: string;
  iconName: SemanticICONS;
  iconColor: SemanticCOLORS;
}[] = [
  {
    id: 'cisc-323',
    link: '/cisc323',
    header: 'CISC 323',
    description: 'Linux Operating System',
    meta: 'SCC - Fall 2022',
    complete: 'complete',
    college: 'SCC',
    professorName: 'Mukarram',
    iconName: 'terminal',
    iconColor: 'grey'
  },
  {
    id: 'cisc-305',
    link: '/cisc305',
    header: 'CISC 305',
    description: 'Introduction to the Internet',
    meta: 'CRC - Fall 2022',
    complete: 'complete',
    college: 'CRC',
    professorName: 'Fishman',
    iconName: 'internet explorer',
    iconColor: 'blue'
  },
  {
    id: 'cisw-308',
    link: '/cisw308',
    header: 'CISW 308',
    description: 'Mobile Web Development',
    meta: 'CRC - Fall 2022',
    complete: 'complete',
    college: 'CRC',
    professorName: 'Fishman',
    iconName: 'mobile',
    iconColor: 'green'
  },
  {
    id: 'cisw-400',
    link: '/cisw400',
    header: 'CISW 400',
    description: 'Client Web Scripting',
    meta: 'CRC - Fall 2022',
    complete: 'in-progress',
    college: 'CRC',
    professorName: 'Fishman',
    iconName: 'js',
    iconColor: 'yellow'
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
                <Label
                  corner='right'
                  icon={collegeClass.complete === 'complete' ? 'check' : 'sync alternative'}
                  color={collegeClass.complete === 'complete' ? 'green' : 'orange'}
                />

                <Card.Content>
                  <Card.Header>{collegeClass.header}</Card.Header>
                  <Card.Meta>{collegeClass.meta}</Card.Meta>
                  <Card.Description>{collegeClass.description}</Card.Description>
                  <Card.Content extra align='right'>
                    <Icon name={collegeClass.iconName} color={collegeClass.iconColor} />
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
