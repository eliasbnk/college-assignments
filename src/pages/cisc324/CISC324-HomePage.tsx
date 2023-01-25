import React from 'react';
import type { FC } from 'react';

import { Helmet } from 'react-helmet';

import Template from 'layout/Template';
import { Icon } from 'semantic-ui-react';

import Title from 'components/Title';

const CISC324HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISC 324 - Homepage</title>
      </Helmet>
      <Template>
        <Title>ASSIGNMENTS</Title>
        <div style={{ textAlign: 'center', fontSize: '1.5em' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginTop: '15px' }}>
              <a
                href='https://github.com/eliasbnk/cisc324/tree/main/Chapter7'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon name='github' />
                Coding Exercises
              </a>
            </li>
            <li style={{ marginTop: '15px' }}>
              <a
                href='https://docs.google.com/uc?id=1n6IWcvfdmg19eiD0JSnEFulhV6iMOt18&export=download'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon name='file' />
                Review Questions
              </a>
            </li>
          </ul>
        </div>
      </Template>
    </>
  );
};

export default CISC324HomePage;
