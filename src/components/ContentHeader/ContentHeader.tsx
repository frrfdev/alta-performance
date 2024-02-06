import Image from 'next/image';
import React from 'react';

type HeaderProps = {
  // children: React.ReactNode;
  productData: {
    profileSrc: string;
    name: string;
    headline: string;
  };
};

export const ContentHeader = ({
  productData: { profileSrc, name, headline },
}: HeaderProps) => {
  return (
    <div className="z-2 p-4 pb-10 bg-gradient-to-b from-neutral-900 to-transparent relative flex gap-2">
      <div className="w-12 min-w-12 h-12 rounded-full overflow-hidden relative border border-white">
        <Image
          src={profileSrc}
          alt="content"
          style={{ objectFit: 'cover' }}
          fill
        ></Image>
      </div>
      <div>
        <div className="text-sm">{name}</div>
        <strong>{headline}</strong>
      </div>
    </div>
  );
};
