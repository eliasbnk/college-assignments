import React, { useEffect, useLayoutEffect, useState } from 'react';
import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Label } from 'semantic-ui-react';
import { NavbarWrapper } from 'shared/style';

const Navbar: FC = () => {
  const [activePage, setActivePage] = useState('/');
  const [url, setURL] = useState('');

  const pathName = useLocation().pathname;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  useEffect(() => {
    if (window.location.href.indexOf('cisw400') > -1) {
      setURL('CISW 400');
    } else if (window.location.href.indexOf('cisw308') > -1) {
      setURL('CISW 308');
    } else if (window.location.href.indexOf('cisc305') > -1) {
      setURL('CISC 305');
    } else if (window.location.href.indexOf('cisc323') > -1) {
      setURL('CISC 323');
    } else if (window.location.href.indexOf('ciss300') > -1) {
      setURL('CISS 300');
    } else if (window.location.href.indexOf('cisc310') > -1) {
      setURL('CISC 310');
    } else if (window.location.href.indexOf('cisc324') > -1) {
      setURL('CISC 324');
    } else if (window.location.href.indexOf('cisw327') > -1) {
      setURL('CISW 327');
    } else if (window.location.href.indexOf('cisw306') > -1) {
      setURL('CISW 306');
    } else if (window.location.href.indexOf('cisp301') > -1) {
      setURL('CISP 301');
    } else if (window.location.href.indexOf('ddsn331') > -1) {
      setURL('DDSN 331');
    } else if (window.location.href.indexOf('ddsn360') > -1) {
      setURL('DDSN 360');
    }

    setActivePage(pathName);
  }, [pathName]);

  return (
    <NavbarWrapper>
      <div style={{ textAlign: 'right', marginRight: '19px', marginTop: '38px' }}>
        <Label>Ilya Babenko · W1793796</Label>
      </div>

      <Menu role='navigation' pointing secondary style={{ marginTop: '0px' }}>
        <Menu.Item style={{ marginLeft: '19px' }} name='Home' active={activePage === '/'} as={Link} to={'/'} />
        {url === 'CISW 400' ? (
          <Menu.Item name='CISW 400' active={activePage === '/cisw400'} as={Link} to={'/cisw400'} />
        ) : url === 'CISW 308' ? (
          <Menu.Item name='CISW 308' active={activePage === '/cisw308'} as={Link} to={'/cisw308'} />
        ) : url === 'CISC 305' ? (
          <Menu.Item name='CISC 305' active={activePage === '/cisc305'} as={Link} to={'/cisc305'} />
        ) : url === 'CISC 323' ? (
          <Menu.Item name='CISC 323' active={activePage === '/cisc323'} as={Link} to={'/cisc323'} />
        ) : url === 'CISS 300' ? (
          <Menu.Item name='CISS 300' active={activePage === '/ciss300'} as={Link} to={'/ciss300'} />
        ) : url === 'CISC 310' ? (
          <Menu.Item name='CISC 310' active={activePage === '/cisc310'} as={Link} to={'/cisc310'} />
        ) : url === 'CISW 327' ? (
          <Menu.Item name='CISW 327' active={activePage === '/cisw327'} as={Link} to={'/cisw327'} />
        ) : url === 'CISC 324' ? (
          <Menu.Item name='CISC 324' active={activePage === '/cisc324'} as={Link} to={'/cisc324'} />
        ) : url === 'CISW 306' ? (
          <Menu.Item name='CISW 306' active={activePage === '/cisw306'} as={Link} to={'/cisw306'} />
        ) : url === 'CISP 301' ? (
          <Menu.Item name='CISP 301' active={activePage === '/cisp301'} as={Link} to={'/cisp301'} />
        ) : url === 'DDSN 331' ? (
          <Menu.Item name='DDSN 331' active={activePage === '/ddsn331'} as={Link} to={'/ddsn331'} />
        ) : url === 'DDSN 360' ? (
          <Menu.Item name='DDSN 360' active={activePage === '/ddsn360'} as={Link} to={'/ddsn360'} />
        ) : null}
        {
          {
            '/cisc305/assignment-6': (
              <Menu.Item
                name='Assignment 6'
                active={activePage === '/cisc305/assignment-6'}
                as={Link}
                to={'/cisc305/assignment-6'}
              />
            ),
            '/cisw400/assignment-1': (
              <Menu.Item
                name='Assignment 1'
                active={activePage === '/cisw400/assignment-1'}
                as={Link}
                to={'/cisw400/assignment-1'}
              />
            ),
            '/cisw400/assignment-2': (
              <Menu.Item
                name='Assignment 2'
                active={activePage === '/cisw400/assignment-2'}
                as={Link}
                to={'/cisw400/assignment-2'}
              />
            ),
            '/cisw400/assignment-3': (
              <Menu.Item
                name='Assignment 3'
                active={activePage === '/cisw400/assignment-3'}
                as={Link}
                to={'/cisw400/assignment-3'}
              />
            ),
            '/cisw400/assignment-4': (
              <Menu.Item
                name='Assignment 4'
                active={activePage === '/cisw400/assignment-4'}
                as={Link}
                to={'/cisw400/assignment-4'}
              />
            ),
            '/cisw400/assignment-5': (
              <Menu.Item
                name='Assignment 5'
                active={activePage === '/cisw400/assignment-5'}
                as={Link}
                to={'/cisw400/assignment-5'}
              />
            ),
            '/cisw400/assignment-6': (
              <Menu.Item
                name='Assignment 6'
                active={activePage === '/cisw400/assignment-6'}
                as={Link}
                to={'/cisw400/assignment-6'}
              />
            ),
            '/cisw400/assignment-7': (
              <Menu.Item
                name='Assignment 7'
                active={activePage === '/cisw400/assignment-7'}
                as={Link}
                to={'/cisw400/assignment-7'}
              />
            ),
            '/cisw400/assignment-8': (
              <Menu.Item
                name='Assignment 8'
                active={activePage === '/cisw400/assignment-8'}
                as={Link}
                to={'/cisw400/assignment-8'}
              />
            ),
            '/cisw400/assignment-9': (
              <Menu.Item
                name='Assignment 9'
                active={activePage === '/cisw400/assignment-9'}
                as={Link}
                to={'/cisw400/assignment-9'}
              />
            ),
            '/cisw308/assignment-1': (
              <Menu.Item
                name='Assignment 1'
                active={activePage === '/cisw308/assignment-1'}
                as={Link}
                to={'/cisw308/assignment-1'}
              />
            ),
            '/cisw308/assignment-2': (
              <Menu.Item
                name='Assignment 2'
                active={activePage === '/cisw308/assignment-2'}
                as={Link}
                to={'/cisw308/assignment-2'}
              />
            ),
            '/cisw308/assignment-3': (
              <Menu.Item
                name='Assignment 3'
                active={activePage === '/cisw308/assignment-3'}
                as={Link}
                to={'/cisw308/assignment-3'}
              />
            ),
            '/cisw308/assignment-4': (
              <Menu.Item
                name='Assignment 4'
                active={activePage === '/cisw308/assignment-4'}
                as={Link}
                to={'/cisw308/assignment-4'}
              />
            ),
            '/cisw308/assignment-5': (
              <Menu.Item
                name='Assignment 5'
                active={activePage === '/cisw308/assignment-5'}
                as={Link}
                to={'/cisw308/assignment-5'}
              />
            ),
            '/cisc324/chapter-7': (
              <Menu.Item
                name='Chapter 7'
                active={activePage === '/cisc324/chapter-7'}
                as={Link}
                to={'/cisc324/chapter-7'}
              />
            ),
            '/ddsn331/cib-1': (
              <Menu.Item name='Chapter 1' active={activePage === '/ddsn331/cib-1'} as={Link} to={'/ddsn331/cib-1'} />
            ),
            '/ddsn331/lab-1': (
              <Menu.Item name='Lab 1' active={activePage === '/ddsn331/lab-1'} as={Link} to={'/ddsn331/lab-1'} />
            ),
            '/ddsn331/cp-1': (
              <Menu.Item
                name='Creative Project 1'
                active={activePage === '/ddsn331/cp-1'}
                as={Link}
                to={'/ddsn331/cp-1'}
              />
            ),
            '/cisp301/hw-1': (
              <Menu.Item name='Homework 1' active={activePage === '/cisp301/hw-1'} as={Link} to={'/cisp301/hw-1'} />
            ),
            '/cisp301/lab-1': (
              <Menu.Item name='Lab 1' active={activePage === '/cisp301/lab-1'} as={Link} to={'/cisp301/lab-1'} />
            ),
            '/cisp301/ice-1': (
              <Menu.Item
                name='In-class Exercise 1'
                active={activePage === '/cisp301/ice-1'}
                as={Link}
                to={'/cisp301/ice-1'}
              />
            ),
            '/ddsn331/cib-2': (
              <Menu.Item name='Chapter 2' active={activePage === '/ddsn331/cib-2'} as={Link} to={'/ddsn331/cib-2'} />
            ),
            '/ddsn331/cib-2-ec': (
              <Menu.Item
                name='Chapter 2 Extra Credit'
                active={activePage === '/ddsn331/cib-2-ec'}
                as={Link}
                to={'/ddsn331/cib-2-ec'}
              />
            ),
            '/ddsn331/lab-2': (
              <Menu.Item name='Lab 2' active={activePage === '/ddsn331/lab-2'} as={Link} to={'/ddsn331/lab-2'} />
            )
          }[pathName]
        }
      </Menu>
    </NavbarWrapper>
  );
};

export default Navbar;
