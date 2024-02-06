import Image from 'next/image';
import React from 'react';
import { ContentHeader } from '../ContentHeader/ContentHeader';
import { ContentDescription } from '../ContentDescription/ContentDescription';

export const ContentDisplay = () => {
  return (
    <div className="w-full min-h-screen bg-red-600 flex flex-col justify-between">
      <Image
        src="https://s3-alpha-sig.figma.com/img/35d3/ea9f/fa3f379fb3393edd21ca2cf6ab7becf6?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M~QwGpKrMOLRwTken~HB8ul2JcOta68urMVFjmXIZSeTtOveFVX4qNO1bgpu5rRl23XeRV3d3U5iaj2LkN~h5XmFWj5ZHWLo2gfDqCPynvFKYQ-uHx-NH7FH0mR2W6osbQ3FiRdK0vKxVtfjA7ZneFQtM78EeMkyWjvoHjhCC312x3ct-3rXSWpkXDo~hfGMEvhEDHPQaq2-T7rGAmATkts1u7QRTqWsQyuNxQcAe8swlquNMHJNaAaj8AsyYsygB9L5ESQUuVUuBUVfez9JOdMY5dPpYK2sjBWjKc1J2lQmSZNNfsNiYlBK19LeIvBaIbF6SyWNPFDXSOV9717aIQ__"
        alt="content"
        className="absolute top-10"
        style={{ objectFit: 'cover' }}
        fill
      ></Image>
      <ContentHeader></ContentHeader>
      <ContentDescription></ContentDescription>
    </div>
  );
};
