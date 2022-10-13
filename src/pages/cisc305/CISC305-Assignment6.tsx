import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import Template from 'layout/Template';
import { Header, Image } from 'semantic-ui-react';
import { MyName } from 'assets';

const websites = [
  {
    id: 'github',
    link: 'https://www.github.com/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
  },
  {
    id: 'w3schools',
    link: 'https://www.w3schools.com/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg'
  },
  {
    id: 'youtube',
    link: 'http://www.youtube.com',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg'
  },
  {
    id: 'amazon',
    link: 'http://www.amazon.com',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  {
    id: 'quizlet',
    link: 'https://www.quizlet.com/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Quizlet_Logo.svg'
  },
  {
    id: 'stackoverflow',
    link: 'http://www.stackoverflow.com/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg'
  }
];

const CISC305Assignment6: FC = () => {
  return (
    <>
      <Helmet>
        <title>CISC 305 - Ilya&apos;s Homepage</title>
      </Helmet>
      <Template>
        <div style={{ textAlign: 'center' }}>
          <div style={{ paddingBottom: '15px' }}>
            <Image src={MyName} size='big' verticalAlign='middle' />
          </div>
          <div>
            <Header as='h1'>Welcome to my Homepage</Header>
            <div
              style={{
                paddingLeft: '20px',
                paddingRight: '20px',
                textAlign: 'center',
                maxWidth: '560px',
                margin: '15px auto'
              }}
            >
              <div style={{ fontStyle: 'italic' }}>
                <div style={{ paddingBottom: '15px' }}>
                  <Header style={{ textAlign: 'center' }} as='h2'>
                    A few intresting things about me:
                  </Header>
                  <Header style={{ textAlign: 'center' }} as='h3'>
                    Im a Russian-American.
                  </Header>
                  <p>
                    I was born in Russia, and at the early age of 7 my family and I moved to the US. I can speak, write,
                    and read fluently in Russian language.
                  </p>
                </div>
                <div style={{ paddingBottom: '15px' }}>
                  <Header style={{ textAlign: 'center' }} as='h3'>
                    I was a private school teacher.
                  </Header>
                  <p>
                    For 2 years I taught the grades: 3rd, 4th, 5th, and 6th. It was a great experince that taught me
                    perserverance and patience.
                  </p>
                </div>
                <div style={{ paddingBottom: '15px' }}>
                  <Header style={{ textAlign: 'center' }} as='h3'>
                    I love coding.
                  </Header>
                  <p>
                    I played around with computers ever since I was little. When I came to the US my tech-savvy older
                    cousins showed me HTML, and I was hooked. When the pandemic hit I took a gap year, and taught myself
                    JS, TS, ReactJS, and a little bit of NodeJS and NextJS.
                  </p>
                </div>
                <div style={{ paddingBottom: '15px' }}>
                  <Header style={{ textAlign: 'center' }} as='h3'>
                    I love coffee.
                  </Header>
                  <p>
                    Caffeine is my kryptonite. I love it, but cant have much of it, as I have hypertension. So when I do
                    have coffee I want the experience to be raw and authentic with the people I love.
                  </p>
                </div>
                <div style={{ paddingBottom: '15px' }}>
                  <Header style={{ textAlign: 'center' }} as='h3'>
                    I love music.
                  </Header>
                  <p>In my honest opinion life would be boring without music. Music adds color to my mundane life.</p>
                </div>
                <div style={{ paddingBottom: '15px' }}>
                  <Header style={{ textAlign: 'center' }} as='h3'>
                    Im a Christian.
                  </Header>
                  <p>
                    I try to be a good Christian, but my sins they are many, so I turn to His mercy of which there is
                    always more.
                  </p>
                </div>
              </div>
            </div>

            <Header style={{ textAlign: 'center' }} as='h2'>
              My favorite Web-sites:
            </Header>

            <div style={{ display: 'block' }}>
              {websites.map((website) => {
                return (
                  <div key={website.id}>
                    <a href={website.link} target='_blank' rel='noopener noreferrer'>
                      <Image
                        src={website.img}
                        verticalAlign='middle'
                        style={{ maxHeight: '110px', maxWidth: '90vw', paddingBottom: '25px' }}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Template>
    </>
  );
};

export default CISC305Assignment6;
