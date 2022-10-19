import React from 'react';
import type { FC } from 'react';

const RolloverImage: FC<{
  setHoverOver: React.Dispatch<React.SetStateAction<string>>;
  hoverOver: string;
  link: string;
  hoverName: string;
  logoImage: string;
  textImage: string;
  altText: string;
}> = ({ setHoverOver, link, hoverName, hoverOver, logoImage, textImage, altText }) => {
  return (
    <div>
      <a href={link} rel='noopener noreferrer' target='_blank'>
        <img
          onMouseOver={() => setHoverOver(hoverName)}
          onMouseOut={() => setHoverOver('')}
          onFocus={() => setHoverOver(hoverName)}
          onBlur={() => setHoverOver('')}
          src={hoverOver === 'crc-hover' ? logoImage : hoverOver === hoverName ? textImage : logoImage}
          alt={altText}
          style={
            hoverOver !== hoverName && hoverOver !== ''
              ? { maxWidth: '300px', opacity: 0.5 }
              : hoverOver === 'crc-hover'
              ? { maxWidth: '300px', border: '3px solid', borderColor: '#d22b2b', boxSizing: 'border-box' }
              : { maxWidth: '300px', border: 'none', borderColor: '#' }
          }
        />
      </a>
    </div>
  );
};

export default RolloverImage;
