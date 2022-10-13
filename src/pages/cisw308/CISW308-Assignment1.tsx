import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const assignment = [
  { completed: true, name: 'Your Name' },
  { completed: true, name: 'Heading for Class title/#' },
  { completed: true, name: 'List of Assignment' },
  { completed: true, name: 'No graphics' }
];

const CISW308Assignment1: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISW 308 - Assignment 1</title>
      </Helmet>
      <Template>
        <Assignment assignment={assignment} />
        <Submissions>
          <Header as='h3'>Ilya Babenko</Header>
          <Header as='h3'>W1793796</Header>
          <Header as='h3'>
            <Link to={'/cisw308'}>URL to student&#x2019;s assignment page</Link>
          </Header>
        </Submissions>
      </Template>
    </>
  );
};

export default CISW308Assignment1;
