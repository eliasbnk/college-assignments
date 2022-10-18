import React from 'react';
import type { FC } from 'react';
import Template from 'layout/Template';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';

const CISS300HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISS 300 - Homepage</title>
      </Helmet>
      <Template>
        <div style={{ textAlign: 'center' }}>
          <Header as='h2' style={{ textAlign: 'center' }}>
            Assignments are completed on{' '}
            <a href='https://tryhackme.com/p/w1793796' target='_blank' rel='noopener noreferrer'>
              TryHackMe.com
            </a>{' '}
            platform.
          </Header>
          <div>
            <a href='https://tryhackme.com/p/w1793796' target='_blank' rel='noopener noreferrer'>
              <img
                style={{ maxWidth: '100%' }}
                src='https://tryhackme-badges.s3.amazonaws.com/w1793796.png'
                alt='TryHackMe'
              />
            </a>
          </div>
        </div>
      </Template>
    </>
  );
};

export default CISS300HomePage;
