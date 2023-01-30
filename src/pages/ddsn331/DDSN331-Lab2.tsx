import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Header, Image } from 'semantic-ui-react';
import { lab2, lab2start } from 'assets';

const DDSN331Lab2: FC = () => {
  return (
    <>
      <Helmet>
        <title>DDSN 331 - Lab 2</title>
      </Helmet>
      <Template>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ margin: 'auto auto' }}>
            <Header as='h1'>Starting File</Header>
            <Image src={lab2start} height='500' />
          </div>
          <div style={{ margin: 'auto auto' }}>
            <Header as='h1'>Editted File</Header>
            <Image src={lab2} height='500' />
          </div>
        </div>
        ;
      </Template>
    </>
  );
};

export default DDSN331Lab2;
