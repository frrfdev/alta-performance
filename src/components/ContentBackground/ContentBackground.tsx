import Image from 'next/image';
import React from 'react';

type ContentBackgroundProps = {
  backgroundImageSrc: string;
};

export const ContentBackground = ({
  backgroundImageSrc,
}: ContentBackgroundProps) => {
  return (
    <Image
      src={backgroundImageSrc}
      alt="content"
      className="absolute z-1"
      style={{ objectFit: 'cover' }}
      fill
    ></Image>
  );
};
