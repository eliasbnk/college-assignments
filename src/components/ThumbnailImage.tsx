import React from 'react';
import type { FC } from 'react';
import { Card } from 'semantic-ui-react';
const ThumbnailImage: FC<{
  key: string;
  image: {
    id: string;
    src: string;
    place: string;
  };
  setBigIMG: React.Dispatch<
    React.SetStateAction<{
      src: string;
      place: string;
    }>
  >;
}> = ({ image, setBigIMG, key }) => {
  return (
    <Card
      key={key}
      image={image.src}
      onMouseOver={() => setBigIMG({ place: image.place, src: image.src })}
      onMouseOut={() =>
        setBigIMG({
          src: '',
          place: ''
        })
      }
      onFocus={() => setBigIMG({ place: image.place, src: image.src })}
      onBlur={() =>
        setBigIMG({
          src: '',
          place: ''
        })
      }
    />
  );
};

export default ThumbnailImage;
