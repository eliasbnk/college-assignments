import React, { useState } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';

import ExtraCredit from 'components/ExtraCredit';
import RolloverImage from '../../components/RolloverImage';
import {
  CISW400Assignment2AssignmentData,
  CISW400Assignment2ExtraCreditData,
  CISW400Assignment2RolloverImageData
} from 'contexts/data';

const CISW400Assignment2: FC = () => {
  const [hoverOver, setHoverOver] = useState('');

  return (
    <>
      <Helmet>
        <title>CISW 400 - Assignment 2</title>
      </Helmet>
      <Template>
        <Assignment assignment={CISW400Assignment2AssignmentData} />
        <ExtraCredit assignment={CISW400Assignment2ExtraCreditData} />
        <Submissions>
          {CISW400Assignment2RolloverImageData.map((data) => {
            return (
              <RolloverImage
                key={data.id}
                setHoverOver={setHoverOver}
                hoverOver={hoverOver}
                link={data.link}
                hoverName={data.hoverName}
                logoImage={data.logoImage}
                textImage={data.textImage}
                altText={data.altText}
              />
            );
          })}
        </Submissions>
      </Template>
    </>
  );
};

export default CISW400Assignment2;
