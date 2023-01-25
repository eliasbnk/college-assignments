import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Image } from 'semantic-ui-react';
import { cib1 } from 'assets';

const DDSN331CiB1: FC = () => {
  return (
    <>
      <Helmet>
        <title>DDSN 331 - CiB 1</title>
      </Helmet>
      <Template>
        <div style={{ margin: 'auto auto' }}>
          <Image src={cib1} height='500' />
        </div>
      </Template>
    </>
  );
};

export default DDSN331CiB1;
