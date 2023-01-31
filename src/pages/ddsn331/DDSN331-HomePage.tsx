import React from 'react';
import type { FC } from 'react';

import { Helmet } from 'react-helmet';

import Template from 'layout/Template';
import { Card, Icon } from 'semantic-ui-react';
import { calcGrade } from 'utils/gradeCalc';
import { Link } from 'react-router-dom';
import Title from 'components/Title';

const assignments = [
  {
    id: 'ddsn331-cib-1',
    link: '/ddsn331/cib-1',
    header: 'Adobe PS Classroom in a Book',
    description: 'Chapter 1',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  },
  {
    id: 'ddsn331-lab-1',
    link: '/ddsn331/lab-1',
    header: 'Lab 1 - Creativity Icebreaker',
    description: 'Scratch Art',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  },
  {
    id: 'ddsn331-cp-1',
    link: '/ddsn331/cp-1',
    header: 'Creativty Project 1',
    description: 'Greeting Card',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  },
  {
    id: 'ddsn331-cib-2',
    link: '/ddsn331/cib-2',
    header: 'Adobe PS Classroom in a Book',
    description: 'Chapter 2',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  },
  {
    id: 'ddsn331-cib-2-ec',
    link: '/ddsn331/cib-2-ec',
    header: 'Adobe PS Classroom in a Book',
    description: 'Chapter 2 Extra Credit',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  },
  {
    id: 'ddsn331-lab-2',
    link: '/ddsn331/lab-2',
    header: 'Lab 2',
    description: 'Basic Photo Editing',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  }
];

const DDSN331HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISC 310 - Homepage</title>
      </Helmet>
      <Template>
        <div>
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
        </div>
      </Template>
    </>
  );
};

export default DDSN331HomePage;
