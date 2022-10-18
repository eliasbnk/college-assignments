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
  iconName: SemanticICONS;
  iconColor: SemanticCOLORS;
}[] = [
  {
    id: 'cisc-305',
    link: '/cisc305',
    header: 'CISC 305',
    description: 'Intro to the Internet',
    meta: 'CRC - Fishman - Fall 2022',
    complete: 'complete',
    college: 'CRC',
    iconName: 'internet explorer',
    iconColor: 'blue'
  },
  {
    id: 'cisc-310',
    link: '/cisc310',
    header: 'CISC 310',
    description: 'Intro to Computer Information Science',
    meta: 'SCC - Bair - Fall 2022',
    complete: 'in-progress',
    college: 'SCC',
    iconName: 'microchip',
    iconColor: 'teal'
  },
  {
    id: 'cisc-323',
    link: '/cisc323',
    header: 'CISC 323',
    description: 'Linux Operating System',
    meta: 'SCC - Mukarram - Fall 2022',
    complete: 'complete',
    college: 'SCC',
    iconName: 'linux',
    iconColor: 'black'
  },
  {
    id: 'cisc-324',
    link: '/cisc324',
    header: 'CISC 324',
    description: 'Intermediate Linux Operating System',
    meta: 'SCC - Osman - Fall 2022',
    complete: 'in-progress',
    college: 'SCC',
    iconName: 'terminal',
    iconColor: 'pink'
  },

  {
    id: 'cisw-308',
    link: '/cisw308',
    header: 'CISW 308',
    description: 'Mobile Web Development',
    meta: 'CRC - Fishman - Fall 2022',
    complete: 'complete',
    college: 'CRC',
    iconName: 'mobile',
    iconColor: 'green'
  },
  {
    id: 'cisw-327',
    link: '/cisw327',
    header: 'CISW 327',
    description: 'Intro to Web Dev coding HTML and CSS',
    meta: 'SCC - Little - Fall 2022',
    complete: 'in-progress',
    college: 'SCC',
    iconName: 'code',
    iconColor: 'violet'
  },
  {
    id: 'cisw-400',
    link: '/cisw400',
    header: 'CISW 400',
    description: 'Client Web Scripting',
    meta: 'CRC - Fishman - Fall 2022',
    complete: 'in-progress',
    college: 'CRC',

    iconName: 'js',
    iconColor: 'yellow'
  },
  {
    id: 'ciss-300',
    link: '/ciss300',
    header: 'CISS 300',
    description: 'Intro to Information Systems Security',
    meta: 'SCC - Richardson - Sequeira - Fall 2022',
    complete: 'in-progress',
    college: 'SCC',
    iconName: 'shield alternate',
    iconColor: 'red'
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
                  icon={collegeClass.complete === 'complete' ? 'check' : 'tasks'}
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
