import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const assignment = [
  {
    completed: true,
    name: 'JavaScript code to display at the bottom of the page - the date the page was last modified.'
  },
  { completed: true, name: 'List of links to the assignments you complete.' }
];

const CISW400Assignment1: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISW 400 - Assignment 1</title>
      </Helmet>
      <Template>
        <Assignment assignment={assignment} />
        <Submissions>
          <Header as='h3'>Ilya Babenko</Header>
          <Header as='h3'>W1793796</Header>
          <Header as='h3'>
            <Link to={'/cisw400'}>URL to student&#x2019;s assignment page</Link>
          </Header>
        </Submissions>
      </Template>
    </>
  );
};

export default CISW400Assignment1;
