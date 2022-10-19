import React from 'react';
import type { FC } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const FirstAssignment: FC<{ link: string }> = ({ link }) => {
  return (
    <>
      <Header as='h3'>Ilya Babenko</Header>
      <Header as='h3'>W1793796</Header>
      <Header as='h3'>
        <Link to={link}>URL to student&#x2019;s assignment page</Link>
      </Header>
    </>
  );
};

export default FirstAssignment;
