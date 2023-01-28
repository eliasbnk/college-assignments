import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Header, Image } from 'semantic-ui-react';
import { greetingCard1, greetingCard2, greetingCard3 } from 'assets';

const DDSN331CP1: FC = () => {
  return (
    <>
      <Helmet>
        <title>DDSN 331 - CP 1</title>
      </Helmet>
      <Template>
        <Header style={{ textAlign: 'center' }} as='h1'>
          Spring Theme - Greeting Card
        </Header>
        <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '15px' }}>
          <div style={{ margin: 'auto auto' }}>
            <Header as='h1'>Design 1</Header>
            <Image src={greetingCard1} height='300' />
          </div>
          <div style={{ margin: 'auto auto' }}>
            <Header as='h1'>Design 2</Header>
            <Image src={greetingCard2} height='300' />
          </div>
          <div style={{ margin: 'auto auto' }}>
            <Header as='h1'>Design 3</Header>
            <Image src={greetingCard3} height='300' />
          </div>
          ;
        </div>
      </Template>
    </>
  );
};

export default DDSN331CP1;
