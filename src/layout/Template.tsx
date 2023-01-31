import React from 'react';
import type { FC, ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Content } from 'shared/style';

const Template: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Content role='main'>{children}</Content>
      <Footer />
    </>
  );
};

export default Template;
