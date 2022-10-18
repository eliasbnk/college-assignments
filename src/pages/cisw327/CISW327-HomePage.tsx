import React from 'react';
import type { FC } from 'react';

import { Helmet } from 'react-helmet';

import Template from 'layout/Template';
import { Header } from 'semantic-ui-react';

const CISW327HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISW 327 - Homepage</title>
      </Helmet>
      <Template>
        <Header as='h1' style={{ textAlign: 'center' }}>
          Coming Soon
        </Header>
      </Template>
    </>
  );
};

export default CISW327HomePage;
