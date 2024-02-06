import React from 'react';

type ContentDescriptionProps = {
  text: string;
};

export const ContentDescription = ({ text }: ContentDescriptionProps) => {
  return (
    <div className="w-full z-2 relative p-4 overflow-hidden">
      <div className="p-4 backdrop-blur-lg max-h-[100px] rounded-lg shadow-lg bg-white bg-opacity-20">
        <p>{text}</p>
      </div>
    </div>
  );
};
