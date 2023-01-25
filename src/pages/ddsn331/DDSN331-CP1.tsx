import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Header, Image } from 'semantic-ui-react';
import { greetingCard1 } from 'assets';

const DDSN331CP1: FC = () => {
  return (
    <>
      <Helmet>
        <title>DDSN 331 - CP 1</title>
      </Helmet>
      <Template>
        <Header as='h1'>Spring Theme - Greeting Card</Header>
        <Image src={greetingCard1} height='500' />
      </Template>
    </>
  );
};

export default DDSN331CP1;