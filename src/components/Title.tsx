import React from 'react';
import type { FC, ReactNode } from 'react';
import { Header } from 'semantic-ui-react';

const Title: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        paddingBottom: '25px'
      }}
    >
      <Header as='h1'>{children}</Header>
    </div>
  );
};

export default Title;
