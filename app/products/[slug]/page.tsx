// web/app/products/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/data/productsData';
import ProductDetail from '@/components/products/ProductDetail';

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductDetailPage({ params }: Props) {
  // Await the params promise
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }
  
  return (
    <main className="product-detail-page">
      <ProductDetail product={product} />
    </main>
  );
}