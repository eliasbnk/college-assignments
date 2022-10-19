import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';
import { CISW400Assignment1AssignmentData } from 'contexts/data';
import FirstAssignment from '../../components/FirstAssignment';

const CISW400Assignment1: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISW 400 - Assignment 1</title>
      </Helmet>
      <Template>
        <Assignment assignment={CISW400Assignment1AssignmentData} />
        <Submissions>
          <FirstAssignment link='/cisw400' />
        </Submissions>
      </Template>
    </>
  );
};

export default CISW400Assignment1;
