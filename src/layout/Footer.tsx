import React from 'react';
import { FooterWrapper } from 'shared/style';

const Footer = () => {
  return (
    <FooterWrapper role='contentinfo'>
      <a style={{ color: '#2d5e8e' }} href='mailto:w1793796@apps.losrios.edu'>
        contact me
      </a>
      {` · © `}
      <b>Ilya Babenko</b>
      {`  2022 - 2090 · Page was last modified on: ${new Date(
        document.lastModified
      ).toLocaleString()} · Powered by: Caffeine`}
    </FooterWrapper>
  );
};

export default Footer;
