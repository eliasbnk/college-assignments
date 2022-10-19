import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import ExtraCredit from 'components/ExtraCredit';
import Submissions from 'components/Submissions';
import { Button, Header, Image } from 'semantic-ui-react';
import {
  CISW400Assignment4AssignmentData,
  CISW400Assignment4ExtraCreditData,
  CISW400Assignment4Images
} from 'contexts/data';

const CISW400Assignment4: FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [order, setOrder] = useState('');
  const [url, setURL] = useState('');
  const [src, setSRC] = useState('');
  const [count, setCount] = useState(0);

  function randomize() {
    try {
      setCount(-1);
      setIsDisabled(true);
      CISW400Assignment4Images.sort(() => Math.random() - 0.5);
      setOrder(`order: ${CISW400Assignment4Images.map((elem) => elem.name)}`);
    } catch ({ message }) {
      console.error(message);
    } finally {
      setIsDisabled(false);
      setCount(0);
    }
  }
  function cycleArray() {
    setCount((prevState) => prevState + 1);
    if (count === CISW400Assignment4Images.length) {
      randomize();
      setCount(0);
    }
    setURL(CISW400Assignment4Images[count].url);
    setSRC(CISW400Assignment4Images[count].src);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      cycleArray();
    }, 1500);
    return () => clearInterval(interval);
  });
  return (
    <>
      <Helmet>
        <title>CISW 400 - Assignment 4</title>
      </Helmet>
      <Template>
        <Assignment assignment={CISW400Assignment4AssignmentData} />
        <ExtraCredit assignment={CISW400Assignment4ExtraCreditData} />
        <Submissions>
          <Header as='h3'>{order}</Header>
          <div>
            <a href={url}>
              <Image src={src} style={{ maxHeight: '30px' }} />
            </a>
          </div>
          <br />
          <Button disabled={isDisabled} onClick={randomize}>
            Shuffle
          </Button>
        </Submissions>
      </Template>
    </>
  );
};

export default CISW400Assignment4;
