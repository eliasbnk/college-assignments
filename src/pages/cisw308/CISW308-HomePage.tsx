import React from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Card, Icon } from 'semantic-ui-react';
import { calcGrade } from 'utils/gradeCalc';
import Template from 'layout/Template';
import Title from 'components/Title';

const assignments = [
  {
    id: 'cisw308-assignment-1',
    link: '/cisw308/assignment-1',
    header: 'Assignment 1',
    description: 'Getting Started/Menu',
    meta: `${calcGrade(75, 75)}`,
    extra: 'complete'
  },
  {
    id: 'cisw308-assignment-2',
    link: '/cisw308/assignment-2',
    header: 'Assignment 2',
    description: 'RWD Research',
    meta: `${calcGrade(75, 75)}`,
    extra: 'complete'
  },
  {
    id: 'cisw308-assignment-3',
    link: '/cisw308/assignment-3',
    header: 'Assignment 3',
    description: 'Flexible Calendar',
    meta: `${calcGrade(100, 100)}`,
    extra: 'complete'
  },
  {
    id: 'cisw308-assignment-4',
    link: '/cisw308/assignment-4',
    header: 'Assignment 4',
    description: 'Mobile Site',
    meta: `${calcGrade(150, 150)}`,
    extra: 'complete'
  },
  {
    id: 'cisw308-assignment-5',
    link: '/cisw308/assignment-5',
    header: 'Assignment 5',
    description: 'Smartphone Features',
    meta: `${calcGrade(100, 100)}`,
    extra: 'complete'
  }
];
const CISW308HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISW 308 - Homepage</title>
      </Helmet>
      <Template>
        <Title>ASSIGNMENTS</Title>
        <Card.Group role='group' fluid centered>
          {assignments.map((assignment) => {
            return (
              <Card
                key={assignment.id}
                {...(assignment.extra === 'complete'
                  ? {
                      as: Link,
                      to: assignment.link
                    }
                  : null)}
              >
                <Card.Content>
                  <Card.Header>{assignment.header}</Card.Header>
                  <Card.Meta style={{ color: '#747474' }}>{assignment.meta}</Card.Meta>
                  <Card.Description>{assignment.description}</Card.Description>
                  <Card.Content extra style={{ textAlign: 'right' }}>
                    {assignment.extra === 'complete' ? (
                      <Icon name='check circle' color='green' />
                    ) : (
                      <Icon name='lock' color='red' />
                    )}
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

export default CISW308HomePage;
