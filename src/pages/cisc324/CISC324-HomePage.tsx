import React from 'react';
import type { FC } from 'react';

import { Helmet } from 'react-helmet';

import Template from 'layout/Template';
import { Card, Icon } from 'semantic-ui-react';
import { calcGrade } from 'utils/gradeCalc';
import Title from 'components/Title';
import { Link } from 'react-router-dom';

const assignments = [
  {
    id: 'cisc324-chapter-7',
    link: '/cisc324/chapter-7',
    header: 'Chapter 7',
    description: 'Working with the Bash Shell',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  }
];

const CISC324HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISC 324 - Homepage</title>
      </Helmet>
      <Template>
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
      </Template>
      ;
    </>
  );
};

export default CISC324HomePage;
