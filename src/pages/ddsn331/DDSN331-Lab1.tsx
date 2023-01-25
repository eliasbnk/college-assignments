import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Image } from 'semantic-ui-react';
import { iceBreaker } from 'assets';

const DDSN331Lab1: FC = () => {
  return (
    <>
      <Helmet>
        <title>DDSN 331 - Lab 1</title>
      </Helmet>
      <Template>
        <Image src={iceBreaker} height='500' />
      </Template>
    </>
  );
};

export default DDSN331Lab1;
