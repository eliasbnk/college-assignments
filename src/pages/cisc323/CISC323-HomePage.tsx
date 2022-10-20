/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import type { FC } from 'react';
import Helmet from 'react-helmet';
import Template from 'layout/Template';
import LabAssignment from '../../components/LabAssignment';
import { CISC323HomePageData } from 'contexts/data';

const CISC323HomePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISC 323 - Homepage</title>
      </Helmet>
      <Template>
        <>
          {CISC323HomePageData.map((a) => {
            return <LabAssignment key={a.id} assignment={a.assignment} lab={a.lab} number={a.number} />;
          })}
        </>
      </Template>
    </>
  );
};

export default CISC323HomePage;
