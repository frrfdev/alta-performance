import Image from 'next/image';
import React from 'react';
import { ContentHeader } from '../ContentHeader/ContentHeader';
import { ContentDescription } from '../ContentDescription/ContentDescription';
import { ContentBackground } from '../ContentBackground/ContentBackground';

type RootProps = {
  children: React.ReactNode;
};

const Root = ({ children }: RootProps) => {
  return (
    <div className="w-full h-full bg-slate-950 relative flex flex-col justify-between">
      {children}
    </div>
  );
};

export const ContentDisplay = {
  Root,
  Background: ContentBackground,
  Header: ContentHeader,
  Description: ContentDescription,
};
