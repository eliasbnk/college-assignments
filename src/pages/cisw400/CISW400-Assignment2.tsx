import React, { useState } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';
import { IndeedLogo, CRCLogoPNG, GlassdoorLogo, GlassdoorText, IndeedText, LinkedinLogo, LinkedinText } from 'assets';
import ExtraCredit from 'components/ExtraCredit';

const assignment = [
  {
    completed: true,
    name: '3  links  with  JavaScript rollovers (hover effect with two images ).'
  },
  {
    completed: true,
    name: 'rollover  link  to  CRC  using  the  Cosumnes River logo or photo from the main campus web site.'
  },
  {
    completed: true,
    name: 'link this page to your assignments menu page.'
  }
];

const extracredit = [
  {
    completed: true,
    name: 'include multiple rollovers on single hover.'
  }
];

const CISW400Assignment2: FC = () => {
  const [hoverOver, setHoverOver] = useState('');

  return (
    <>
      <Helmet>
        <title>CISW 400 - Assignment 2</title>
      </Helmet>
      <Template>
        <Assignment assignment={assignment} />
        <ExtraCredit assignment={extracredit} />
        <Submissions>
          <div>
            <a href='https://www.indeed.com' rel='noopener noreferrer' target='_blank'>
              <img
                onMouseOver={() => setHoverOver('indeed-hover')}
                onMouseOut={() => setHoverOver('')}
                onFocus={() => setHoverOver('indeed-hover')}
                onBlur={() => setHoverOver('')}
                src={hoverOver === 'indeed-hover' ? IndeedText : IndeedLogo}
                alt='Indeed Logo'
                style={
                  hoverOver !== 'indeed-hover' && hoverOver !== ''
                    ? {
                        maxWidth: '300px',
                        height: '168px',
                        opacity: 0.5
                      }
                    : { maxWidth: '300px', height: '168px' }
                }
              />
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com' rel='noopener noreferrer' target='_blank'>
              <img
                onMouseOver={() => setHoverOver('linkedin-hover')}
                onMouseOut={() => setHoverOver('')}
                onFocus={() => setHoverOver('linkedin-hover')}
                onBlur={() => setHoverOver('')}
                src={hoverOver === 'linkedin-hover' ? LinkedinText : LinkedinLogo}
                alt='Linked Logo'
                style={
                  hoverOver !== 'linkedin-hover' && hoverOver !== ''
                    ? { maxWidth: '300px', opacity: 0.5 }
                    : { maxWidth: '300px' }
                }
              />
            </a>
          </div>
          <div>
            <a href='https://www.glassdoor.com' rel='noopener noreferrer' target='_blank'>
              <img
                onMouseOver={() => setHoverOver('glassdoor-hover')}
                onMouseOut={() => setHoverOver('')}
                onFocus={() => setHoverOver('glassdoor-hover')}
                onBlur={() => setHoverOver('')}
                src={hoverOver === 'glassdoor-hover' ? GlassdoorText : GlassdoorLogo}
                alt='Glassdoor Logo'
                style={
                  hoverOver !== 'glassdoor-hover' && hoverOver !== ''
                    ? { maxWidth: '300px', opacity: 0.5 }
                    : { maxWidth: '300px' }
                }
              />
            </a>
          </div>
          <div>
            <a href='https://crc.losrios.edu' rel='noopener noreferrer' target='_blank'>
              <img
                onMouseOver={() => setHoverOver('crc-hover')}
                onMouseOut={() => setHoverOver('')}
                onFocus={() => setHoverOver('crc-hover')}
                onBlur={() => setHoverOver('')}
                src={CRCLogoPNG}
                style={
                  hoverOver === 'crc-hover' || hoverOver !== ''
                    ? { maxWidth: '300px', border: '3px solid', borderColor: '#d22b2b', boxSizing: 'border-box' }
                    : { maxWidth: '300px', border: 'none', borderColor: '#' }
                }
                alt='CRC logo'
              />
            </a>
          </div>
        </Submissions>
      </Template>
    </>
  );
};

export default CISW400Assignment2;
