import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import Assignment from 'components/Assignment';
import Submissions from 'components/Submissions';
import ExtraCredit from 'components/ExtraCredit';
import Bowser from 'bowser';
import Popup from 'components/Popup';
import { Header, List, Image } from 'semantic-ui-react';
import {
  CISW400Assignment3AssignmentData,
  CISW400Assignment3ExtraCreditData,
  CISW400Assignment3OtherBrowserOptions,
  CISW400Assignment3PopupStyle
} from 'contexts/data';

const CISW400Assignment3: FC = () => {
  const [browserName, setBrowserName] = useState<string | undefined>('');
  const [browserVersion, setBrowserVersion] = useState<string | undefined>('');
  const [osName, setOSName] = useState<string | undefined>('');
  const [osVersion, setOSVersion] = useState<string | undefined>('');
  const [open, setOpen] = useState(false);

  const optionList = CISW400Assignment3OtherBrowserOptions(browserName);

  useEffect(() => {
    const result = Bowser.parse(window.navigator.userAgent);
    setBrowserName(result.browser.name);
    setBrowserVersion(result.browser.version);
    setOSName(result.os.name);
    setOSVersion(result.os.versionName);
    setOpen(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>CISW 400 - Assignment 3</title>
      </Helmet>
      <Template>
        <Assignment assignment={CISW400Assignment3AssignmentData} />
        <ExtraCredit assignment={CISW400Assignment3ExtraCreditData} />
        <Submissions>
          <Popup
            style={CISW400Assignment3PopupStyle(browserName)}
            browserName={browserName}
            browserVersion={browserVersion}
            osName={osName}
            osVersion={osVersion}
            open={open}
            setOpen={setOpen}
          />
          <Header as='h3'>Try out one of these other great browsers:</Header>
          <List>
            {optionList.map((browser) => {
              return (
                <List.Item key={browser.id}>
                  <a href={browser.link}>
                    <Image style={{ maxWidth: '250px' }} src={browser.image} />
                  </a>
                </List.Item>
              );
            })}
          </List>
        </Submissions>
      </Template>
    </>
  );
};

export default CISW400Assignment3;
