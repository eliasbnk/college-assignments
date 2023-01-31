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
    id: 'cisc305-assignment-6',
    link: '/cisc305/assignment-6',
    header: 'Assignment 6',
    description: 'Personal Web Page',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  }
];
const CISC305HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISC 305 - Homepage</title>
      </Helmet>
      <Template>
        <div>
          <Title>ASSIGNMENT</Title>
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

export default CISC305HomePage;
