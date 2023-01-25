import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Image, Header } from 'semantic-ui-react';
import { cib1, cib1start } from 'assets';

const DDSN331CiB1: FC = () => {
  return (
    <>
      <Helmet>
        <title>DDSN 331 - CiB 1</title>
      </Helmet>
      <Template>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ margin: 'auto auto' }}>
            <Header as='h1'>Starting File</Header>
            <Image src={cib1start} height='500' />
          </div>
          <div style={{ margin: 'auto auto' }}>
            <Header as='h1'>Editted File</Header>
            <Image src={cib1} height='500' />
          </div>
        </div>
      </Template>
    </>
  );
};

export default DDSN331CiB1;
