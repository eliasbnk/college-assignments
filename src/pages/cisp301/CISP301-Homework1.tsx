import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Icon } from 'semantic-ui-react';

const CISP301Homework1: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISP 301 - Homework 1</title>
      </Helmet>
      <Template>
        <div style={{ textAlign: 'center', margin: '0 auto', fontSize: '1.5em' }}>
          <a
            href='https://docs.google.com/uc?id=1t8yaB5bNmUbgP2uIUz8wxkvfMTrPcxGC&export=download'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon name='file' />
            Homework Assignment 1
          </a>
        </div>
      </Template>
    </>
  );
};

export default CISP301Homework1;
