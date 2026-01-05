// app/industries/page.tsx
import IndustriesHero from '@/components/Industries/IndustriesHero';
import Industries from '@/components/home/Industries';

export default function IndustriesPage() {
  return (
    <div>
      <IndustriesHero />
      <Industries />
      {/* Rest of your industries page content */}
    </div>
  );
}