import { ContentDisplay } from '@/components/ContentDisplay/ContentDisplay';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-full  flex min-h-screen">
      <ContentDisplay></ContentDisplay>
    </main>
  );
}
