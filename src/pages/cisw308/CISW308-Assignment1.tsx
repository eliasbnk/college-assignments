import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';
import { CISW308Assignment1AssignmentData } from 'contexts/data';
import FirstAssignment from '../../components/FirstAssignment';

const CISW308Assignment1: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISW 308 - Assignment 1</title>
      </Helmet>
      <Template>
        <Assignment assignment={CISW308Assignment1AssignmentData} />
        <Submissions>
          <FirstAssignment link='/cisw308' />
        </Submissions>
      </Template>
    </>
  );
};

export default CISW308Assignment1;
