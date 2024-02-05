import { AlertTag } from '@/components/AlertTag/AlertTag';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-yellow-500 font-bold uppercase text-4xl p-24">
        Transforme sua Vida com Alta Performance!!
      </h1>
      <AlertTag />
      <h3>
        Descubra o Segredo Da Alta Performance Para Uma Explosão De Energia e
        Foco Invencíveis
      </h3>
    </main>
  );
}
