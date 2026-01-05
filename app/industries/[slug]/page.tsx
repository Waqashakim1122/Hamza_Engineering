// app/industries/[slug]/page.tsx
import IndustryDetail from '@/components/Industries/IndustryDetail';
import { industriesData } from '@/data/industriesData';

// Generate static paths for all industries
export async function generateStaticParams() {
  return industriesData.map((industry) => ({
    slug: industry.slug,
  }));
}

// Option 1: Make the component async and await params
export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <IndustryDetail industrySlug={slug} />;
}