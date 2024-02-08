import { ContentSlider } from '@/components/ContentSlider/ContentSlider';

const product = {
  id: '23726352376',
  name: 'Relaxol A',
  headline: 'Product Description',
  profileSrc:
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  slides: [
    {
      id: '2387325238',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer	posuere erat a ante.',
      backgroundSrc:
        'https://s3-alpha-sig.figma.com/img/35d3/ea9f/fa3f379fb3393edd21ca2cf6ab7becf6?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M~QwGpKrMOLRwTken~HB8ul2JcOta68urMVFjmXIZSeTtOveFVX4qNO1bgpu5rRl23XeRV3d3U5iaj2LkN~h5XmFWj5ZHWLo2gfDqCPynvFKYQ-uHx-NH7FH0mR2W6osbQ3FiRdK0vKxVtfjA7ZneFQtM78EeMkyWjvoHjhCC312x3ct-3rXSWpkXDo~hfGMEvhEDHPQaq2-T7rGAmATkts1u7QRTqWsQyuNxQcAe8swlquNMHJNaAaj8AsyYsygB9L5ESQUuVUuBUVfez9JOdMY5dPpYK2sjBWjKc1J2lQmSZNNfsNiYlBK19LeIvBaIbF6SyWNPFDXSOV9717aIQ__',
    },
    {
      id: '23873253238',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer	posuere erat a ante.',
      backgroundSrc:
        'https://s3-alpha-sig.figma.com/img/35d3/ea9f/fa3f379fb3393edd21ca2cf6ab7becf6?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M~QwGpKrMOLRwTken~HB8ul2JcOta68urMVFjmXIZSeTtOveFVX4qNO1bgpu5rRl23XeRV3d3U5iaj2LkN~h5XmFWj5ZHWLo2gfDqCPynvFKYQ-uHx-NH7FH0mR2W6osbQ3FiRdK0vKxVtfjA7ZneFQtM78EeMkyWjvoHjhCC312x3ct-3rXSWpkXDo~hfGMEvhEDHPQaq2-T7rGAmATkts1u7QRTqWsQyuNxQcAe8swlquNMHJNaAaj8AsyYsygB9L5ESQUuVUuBUVfez9JOdMY5dPpYK2sjBWjKc1J2lQmSZNNfsNiYlBK19LeIvBaIbF6SyWNPFDXSOV9717aIQ__',
    },
  ],
};

export default function Home() {
  return (
    <main className="h-full  flex min-h-screen">
      <ContentSlider product={product}></ContentSlider>
    </main>
  );
}
