import React from 'react';
import type { FC } from 'react';

import { Helmet } from 'react-helmet';

import Template from 'layout/Template';
import { Header } from 'semantic-ui-react';

const CISC324HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISC 324 - Homepage</title>
      </Helmet>
      <Template>
        <Header as='h1' style={{ textAlign: 'center' }}>
          Coming Soon
        </Header>
      </Template>
    </>
  );
};

export default CISC324HomePage;
