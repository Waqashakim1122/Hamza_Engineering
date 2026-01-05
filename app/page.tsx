// web/app/page.tsx
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Industries from '@/components/home/Industries';
import CtaContact from '@/components/home/CtaContact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <CtaContact />
    </>
  );
}