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
import { v4 as uuidv4 } from 'uuid';

const assignment = [
  {
    completed: true,
    name: 'a pop-up.'
  },
  {
    completed: true,
    name: 'the pop-up has a close button that the user must click in order to see the webpage.'
  },
  {
    completed: true,
    name: 'a “show pop-up” button that the user can click to reopen the pop-up.'
  }
];

const extracredit = [
  {
    completed: true,
    name: 'display a message which identifies which browser vendor and version the client is running.'
  },
  {
    completed: false,
    name: 'change the background color and the text color depending on which browser vendor the client is using to view this website'
  },
  {
    completed: true,
    name: 'include links to the respective download pages for other browsers.'
  }
];

const CISW400Assignment3: FC = () => {
  const [browserName, setBrowserName] = useState<string | undefined>('');
  const [browserVersion, setBrowserVersion] = useState<string | undefined>('');
  const [osName, setOSName] = useState<string | undefined>('');
  const [osVersion, setOSVersion] = useState<string | undefined>('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const result = Bowser.parse(window.navigator.userAgent);
    setBrowserName(result.browser.name);
    setBrowserVersion(result.browser.version);
    setOSName(result.os.name);
    setOSVersion(result.os.versionName);
    setOpen(true);
  }, []);

  const style =
    browserName === 'Safari'
      ? { backgroundColor: 'gray', color: 'blue' }
      : browserName === 'Chrome'
      ? { backgroundColor: 'green', color: 'red' }
      : browserName === 'Firefox'
      ? { backgroundColor: 'yellow', color: 'black' }
      : browserName === 'Internet Explorer'
      ? { backgroundColor: 'blue', color: 'white' }
      : browserName === 'Microsoft Edge'
      ? { backgroundColor: 'blue', color: 'white' }
      : {};
  const otherBrowser: {
    id: string;
    image: string;
    link: string;
  }[] =
    browserName === 'Safari'
      ? [
          {
            id: uuidv4(),
            image: 'https://www.mygsc.com/wp-content/uploads/2020/06/Chrome-emblem.jpg',
            link: 'https://www.google.com/chrome/'
          },
          {
            id: uuidv4(),
            link: 'https://www.mozilla.org/en-US/firefox/new/',
            image:
              'https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ef09471731cbb40b3d85aac_firefox_2019_logo.jpg'
          },
          {
            id: uuidv4(),
            link: 'https://www.microsoft.com/en-us/download/internet-explorer.aspx',
            image:
              'https://static.businessworld.in/article/article_extra_large_image/1655096916_nrep6W_internet_explorer_logo_900x330.png'
          },
          {
            id: uuidv4(),
            link: 'https://www.microsoft.com/en-us/edge',
            image: 'https://winaero.com/blog/wp-content/uploads/2019/12/Microsoft-Edge-Chromium-banner.png'
          }
        ]
      : browserName === 'Chrome'
      ? [
          {
            id: uuidv4(),
            link: 'https://support.apple.com/downloads/safari',
            image:
              'https://image.chitra.live/api/v1/wps/33d91e5/d9f427c1-cf34-443c-9625-e57444e18d8b/6/Apple-Safari-580x358.jpg'
          },
          {
            id: uuidv4(),
            link: 'https://www.mozilla.org/en-US/firefox/new/',
            image:
              'https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ef09471731cbb40b3d85aac_firefox_2019_logo.jpg'
          },
          {
            id: uuidv4(),
            link: 'https://www.microsoft.com/en-us/download/internet-explorer.aspx',
            image:
              'https://static.businessworld.in/article/article_extra_large_image/1655096916_nrep6W_internet_explorer_logo_900x330.png'
          },
          {
            id: uuidv4(),
            link: 'https://www.microsoft.com/en-us/edge',
            image: 'https://winaero.com/blog/wp-content/uploads/2019/12/Microsoft-Edge-Chromium-banner.png'
          }
        ]
      : browserName === 'Firefox'
      ? [
          {
            id: uuidv4(),
            link: 'https://support.apple.com/downloads/safari',
            image:
              'https://image.chitra.live/api/v1/wps/33d91e5/d9f427c1-cf34-443c-9625-e57444e18d8b/6/Apple-Safari-580x358.jpg'
          },
          {
            id: uuidv4(),
            image: 'https://www.mygsc.com/wp-content/uploads/2020/06/Chrome-emblem.jpg',
            link: 'https://www.google.com/chrome/'
          },
          {
            id: uuidv4(),
            link: 'https://www.microsoft.com/en-us/download/internet-explorer.aspx',
            image:
              'https://static.businessworld.in/article/article_extra_large_image/1655096916_nrep6W_internet_explorer_logo_900x330.png'
          },
          {
            id: uuidv4(),
            link: 'https://www.microsoft.com/en-us/edge',
            image: 'https://winaero.com/blog/wp-content/uploads/2019/12/Microsoft-Edge-Chromium-banner.png'
          }
        ]
      : browserName === 'Internet Explorer'
      ? [
          {
            id: uuidv4(),
            link: 'https://support.apple.com/downloads/safari',
            image:
              'https://image.chitra.live/api/v1/wps/33d91e5/d9f427c1-cf34-443c-9625-e57444e18d8b/6/Apple-Safari-580x358.jpg'
          },
          {
            id: uuidv4(),
            image: 'https://www.mygsc.com/wp-content/uploads/2020/06/Chrome-emblem.jpg',
            link: 'https://www.google.com/chrome/'
          },
          {
            id: uuidv4(),
            link: 'https://www.mozilla.org/en-US/firefox/new/',
            image:
              'https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ef09471731cbb40b3d85aac_firefox_2019_logo.jpg'
          },
          {
            id: uuidv4(),
            link: 'https://www.microsoft.com/en-us/edge',
            image: 'https://winaero.com/blog/wp-content/uploads/2019/12/Microsoft-Edge-Chromium-banner.png'
          }
        ]
      : browserName === 'Microsoft Edge'
      ? [
          {
            id: uuidv4(),
            link: 'https://support.apple.com/downloads/safari',
            image:
              'https://image.chitra.live/api/v1/wps/33d91e5/d9f427c1-cf34-443c-9625-e57444e18d8b/6/Apple-Safari-580x358.jpg'
          },
          {
            id: uuidv4(),
            image: 'https://www.mygsc.com/wp-content/uploads/2020/06/Chrome-emblem.jpg',
            link: 'https://www.google.com/chrome/'
          },
          {
            id: uuidv4(),
            link: 'https://www.microsoft.com/en-us/download/internet-explorer.aspx',
            image:
              'https://static.businessworld.in/article/article_extra_large_image/1655096916_nrep6W_internet_explorer_logo_900x330.png'
          },
          {
            id: uuidv4(),
            link: 'https://www.mozilla.org/en-US/firefox/new/',
            image:
              'https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ef09471731cbb40b3d85aac_firefox_2019_logo.jpg'
          }
        ]
      : [{ id: uuidv4(), link: '', image: '' }];

  return (
    <>
      <Helmet>
        <title>CISW 400 - Assignment 3</title>
      </Helmet>
      <Template>
        <Assignment assignment={assignment} />
        <ExtraCredit assignment={extracredit} />
        <Submissions>
          <Popup
            style={style}
            browserName={browserName}
            browserVersion={browserVersion}
            osName={osName}
            osVersion={osVersion}
            open={open}
            setOpen={setOpen}
          />
          <Header as='h3'>Try out one of these other great browsers:</Header>
          <List>
            {otherBrowser.map((browser) => {
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
