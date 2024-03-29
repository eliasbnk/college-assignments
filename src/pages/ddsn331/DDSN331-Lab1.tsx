import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Header, Image } from 'semantic-ui-react';
import { iceBreaker } from 'assets';

const DDSN331Lab1: FC = () => {
  return (
    <>
      <Helmet>
        <title>DDSN 331 - Lab 1</title>
      </Helmet>
      <Template>
        <div style={{ textAlign: 'center' }}>
          <Header as='h1'>Scratch &quot;Doodle&quot; Art</Header>
          <Image style={{ marginLeft: 'auto', marginRight: 'auto' }} src={iceBreaker} height='500' />
        </div>
      </Template>
    </>
  );
};

export default DDSN331Lab1;
