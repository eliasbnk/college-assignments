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
    id: 'cisp301-hw-1',
    link: '/cisp301/hw-1',
    header: 'Homework 1',
    description: 'Number Base Conversions',
    meta: `${calcGrade(100, 100)}`,
    extra: 'complete'
  },
  {
    id: 'cisp301-lab-1',
    link: '/cisp301/lab-1',
    header: 'Lab 1',
    description: '“Hello, World!” in C++',
    meta: `${calcGrade(100, 100)}`,
    extra: 'complete'
  },
  {
    id: 'cisp-ice-2',
    link: '/cisp301/ice-1',
    header: 'In-Class Exercise 1',
    description: 'Candy Sale',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  }
];

const CISP301HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISP 301 - Homepage</title>
      </Helmet>
      <Template>
        <div>
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
        ;
      </Template>
    </>
  );
};

export default CISP301HomePage;
