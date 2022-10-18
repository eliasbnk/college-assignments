import React from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Card, Icon } from 'semantic-ui-react';
import { calcGrade } from 'utils/grade-calc';
import Template from 'layout/Template';
import Title from 'components/Title';

const assignments = [
  {
    id: 'cisw400-assignment-1',
    link: '/cisw400/assignment-1',
    header: 'Assignment 1',
    description: 'Menu Page & Date',
    meta: `${calcGrade(50, 50)}`,
    extra: 'complete'
  },
  {
    id: 'cisw400-assignment-2',
    link: '/cisw400/assignment-2',
    header: 'Assignment 2',
    description: 'Rollovers',
    meta: `${calcGrade(53, 50)}`,
    extra: 'complete'
  },
  {
    id: 'cisw400-assignment-3',
    link: '/cisw400/assignment-3',
    header: 'Assignment 3',
    description: 'Pop-Up & Browser Detection',
    meta: `${calcGrade(90, 75)}`,
    extra: 'complete'
  },
  {
    id: 'cisw400-assignment-4',
    link: '/cisw400/assignment-4',
    header: 'Assignment 4',
    description: 'Slide Show',
    meta: `${calcGrade(78, 75)}`,
    extra: 'complete'
  },
  {
    id: 'cisw400-assignment-5',
    link: '/cisw400/assignment-5',
    header: 'Assignment 5',
    description: 'Smart Forms',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  },
  {
    id: 'cisw400-assignment-6',
    link: '/cisw400/assignment-6',
    header: 'Assignment 6',
    description: 'DHTML',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  },
  {
    id: 'cisw400-assignment-7',
    link: '/cisw400/assignment-7',
    header: 'Assignment 7',
    description: 'Cookies',
    meta: `${calcGrade(0, 100)}`,
    extra: 'locked'
  },
  {
    id: 'cisw400-assignment-8',
    link: '/cisw400/assignment-8',
    header: 'Assignment 8',
    description: 'AJAX Article Review',
    meta: `${calcGrade(0, 50)}`,
    extra: 'locked'
  },
  {
    id: 'cisw400-assignment-9',
    link: '/cisw400/assignment-9',
    header: 'Assignment 9',
    description: 'Cross-Site Scripting',
    meta: `${calcGrade(0, 25)}`,
    extra: 'locked'
  }
];

const CISW400HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISW 400 - Homepage</title>
      </Helmet>
      <Template>
        <div style={{ margin: 'auto auto' }}>
          <Title>ASSIGNMENTS</Title>
          <Card.Group fluid centered>
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
                    <Card.Meta>{assignment.meta}</Card.Meta>
                    <Card.Description>{assignment.description}</Card.Description>
                    <Card.Content extra align='right'>
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
        </div>
      </Template>
    </>
  );
};

export default CISW400HomePage;
