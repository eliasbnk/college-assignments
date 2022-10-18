import React from 'react';
import type { FC } from 'react';

import { Helmet } from 'react-helmet';

import Template from 'layout/Template';
import { Header } from 'semantic-ui-react';

const CISC310HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISC 310 - Homepage</title>
      </Helmet>
      <Template>
        <Header as='h2' style={{ textAlign: 'center' }}>
          Assignments are completed on{' '}
          <a href='http://ng.cengage.com' target='_blank' rel='noopener noreferrer'>
            MindTap
          </a>{' '}
          platform.
        </Header>
      </Template>
    </>
  );
};

export default CISC310HomePage;
