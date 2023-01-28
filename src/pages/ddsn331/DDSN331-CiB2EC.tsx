import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Header, Image } from 'semantic-ui-react';
import { cib2ec, cib2ecstart } from 'assets';

const DDSN331CiB2EC: FC = () => {
  return (
    <>
      <Helmet>
        <title>DDSN 331 - CiB 2 EC</title>
      </Helmet>
      <Template>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ margin: 'auto auto' }}>
            <Header as='h1'>Starting File</Header>
            <Image src={cib2ecstart} height='500' />
          </div>
          <div style={{ margin: 'auto auto' }}>
            <Header as='h1'>Editted File</Header>
            <Image src={cib2ec} height='500' />
          </div>
        </div>
      </Template>
    </>
  );
};

export default DDSN331CiB2EC;
