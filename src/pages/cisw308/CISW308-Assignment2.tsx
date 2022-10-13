import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Header, List } from 'semantic-ui-react';
import Submissions from 'components/Submissions';

const CISW308Assignment2: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISW 308 - Assignment 2</title>
      </Helmet>
      <Template>
        <div style={{ paddingBottom: '25px', marginLeft: '19px' }}>
          <Header as='h1'>ASSIGNMENT:</Header>
          <List ordered>
            <List.Item>What were the websites that you found? (include URLs)</List.Item>
            <List.Item>How did you test the websites? (name devices and/or browsers)</List.Item>
            <List.Item>On the responsive site, what elements changed? (text, images, layout, etc)</List.Item>
            <List.Item>
              On the non-responsive site, describe the viewing experience from a user’s perspective. What could be
              improved?
            </List.Item>
          </List>
        </div>
        <Submissions>
          <List ordered>
            <List.Item>
              <br />
              <List.List>
                Unresponsive:
                <br />
                <List.Item>
                  <a
                    style={{ paddingLeft: '15px' }}
                    href='http://dequeuniversity.com/library/responsive/1-non-responsive'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    http://dequeuniversity.com/library/responsive/1-non-responsive
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    style={{ paddingLeft: '15px' }}
                    href='http://sacramento.craigslist.org'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    https://sacramento.craigslist.org{' '}
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    style={{ paddingLeft: '15px' }}
                    href='http://www.pennyjuice.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    https://www.pennyjuice.com
                  </a>
                </List.Item>
                Responsive:
                <br />
                <List.Item>
                  <a
                    style={{ paddingLeft: '15px' }}
                    href='https://dequeuniversity.com/library/responsive/1-responsive'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    https://dequeuniversity.com/library/responsive/1-responsive
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    style={{ paddingLeft: '15px' }}
                    href='https://www.dropbox.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    https://www.dropbox.com
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    style={{ paddingLeft: '15px' }}
                    href='https://dribbble.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    https://dribbble.com
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    style={{ paddingLeft: '15px' }}
                    href='https://github.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    https://github.com
                  </a>
                </List.Item>
                <List.Item>
                  <a style={{ paddingLeft: '15px' }} href='https://slack.com' target='_blank' rel='noopener noreferrer'>
                    https://slack.com
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    style={{ paddingLeft: '15px' }}
                    href='http://css-tricks.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    https://css-tricks.com
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    style={{ paddingLeft: '15px' }}
                    href='http://www.starbucks.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    http://www.starbucks.com
                  </a>
                </List.Item>
              </List.List>
            </List.Item>
            <br />
            <List.Item>
              <br />
              <List.List>
                <List.Item>
                  <p style={{ paddingLeft: '15px' }}>
                    By viewing the same website on a desktop computer and then viewing the same site on a mobile device.
                  </p>
                </List.Item>
                <List.Item>
                  {' '}
                  <p style={{ paddingLeft: '15px' }}>
                    By emulating different screen sizes/devices in the developer tools.
                  </p>
                </List.Item>
                <List.Item>
                  <p style={{ paddingLeft: '15px' }}>By resizing the browser window.</p>
                </List.Item>
              </List.List>
            </List.Item>
            <br />
            <List.Item>
              <p style={{ paddingLeft: '15px' }}>
                Content wrapped, resized, and moved to adapt to the space available. Images resized. Text wrapped.
                Sidebars moved out of the way.
              </p>
            </List.Item>
            <br />
            <List.Item>
              <p style={{ paddingLeft: '15px' }}>
                Horrible, as content overflowed or on the mobile buttons were so small and thus the website was
                unusable.
              </p>
            </List.Item>
          </List>
        </Submissions>
      </Template>
    </>
  );
};

export default CISW308Assignment2;
