import Image from 'next/image';
import React from 'react';

export const ContentHeader = () => {
  return (
    <div className="z-2 p-4 pb-10 bg-gradient-to-b from-neutral-900 to-transparent relative flex gap-2">
      <div className="w-12 min-w-12 h-12 rounded-full overflow-hidden relative border border-white">
        <Image
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="content"
          style={{ objectFit: 'cover' }}
          fill
        ></Image>
      </div>
      <div>
        <div className="text-sm">Josana Stephen</div>
        <strong>Venha conhecer o circo da puta que o pariu!!!</strong>
      </div>
    </div>
  );
};
