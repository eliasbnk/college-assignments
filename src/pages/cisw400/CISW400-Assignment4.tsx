import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import ExtraCredit from 'components/ExtraCredit';
import Submissions from 'components/Submissions';
import { v4 as uuidv4 } from 'uuid';
import { Button, Header, Image } from 'semantic-ui-react';

const assignment = [
  {
    completed: true,
    name: 'a pop-up.'
  },
  {
    completed: true,
    name: 'a slide show that alternates a series of images in a timed-sequence loop.'
  },
  {
    completed: true,
    name: 'at least three images in the rotation.'
  },
  {
    completed: true,
    name: 'images on the slideshow are click-able and each image must link to a different URL.'
  }
];

const extracredit = [
  {
    completed: true,
    name: 'Make the images appear in random order.'
  }
];

const images = [
  {
    id: uuidv4(),
    name: 'crc',
    src: 'https://crc.losrios.edu/crc/main/img/admin/logo/crc-logo.svg',
    url: 'https://crc.losrios.edu/'
  },
  {
    id: uuidv4(),
    name: 'scc',
    src: 'https://scc.losrios.edu/scc/main/img/sitewide-multi/logo/scc-logo-desktop.svg',
    url: 'https://scc.losrios.edu/'
  },
  {
    id: uuidv4(),
    name: 'arc',
    src: 'https://arc.losrios.edu/arc/main/img/logos/arc-logo.svg',
    url: 'https://arc.losrios.edu/'
  },
  {
    id: uuidv4(),
    name: 'flc',
    src: 'https://flc.losrios.edu/flc/shared/img/admin/logos-icons/flc-desktop-logo.svg',
    url: 'https://flc.losrios.edu/'
  }
];

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
      images.sort(() => Math.random() - 0.5);
      setOrder(`order: ${images.map((elem) => elem.name)}`);
    } catch ({ message }) {
      console.error(message);
    } finally {
      setIsDisabled(false);
      setCount(0);
    }
  }
  function cycleArray() {
    setCount((prevState) => prevState + 1);
    if (count === images.length) {
      randomize();
      setCount(0);
    }
    setURL(images[count].url);
    setSRC(images[count].src);
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
        <Assignment assignment={assignment} />
        <ExtraCredit assignment={extracredit} />
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
