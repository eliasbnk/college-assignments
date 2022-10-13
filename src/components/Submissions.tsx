import React from 'react';
import type { FC, ReactNode } from 'react';
import { Header } from 'semantic-ui-react';

const Submissions: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div style={{ paddingBottom: '25px', marginLeft: '19px' }}>
      <Header as='h1'>ASSIGNMENT SUBMISSION:</Header>
      {children}
    </div>
  );
};

export default Submissions;
