import React from 'react';
import type { FC } from 'react';
import { CISW327Chapter7ReviewQuestionsData } from 'contexts/data';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import CISC324Assignments from 'components/CISC324Assignments';

const CISC324Chapter7: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISC 324 - Assignment 1</title>
      </Helmet>
      <Template>
        <CISC324Assignments codeLink='tree/main/Chapter7' assignment={CISW327Chapter7ReviewQuestionsData} />
      </Template>
    </>
  );
};

export default CISC324Chapter7;
